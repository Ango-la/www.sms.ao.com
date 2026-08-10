$indexPath = 'index.html'
$cssPath = 'style.css'
$backupPath = 'index.html.bak'
if (-not (Test-Path $backupPath)) { Copy-Item $indexPath $backupPath }
$text = Get-Content -Raw -Path $indexPath
$stylePattern = [regex]'style="([^"]*?)"'
$map = @{}
$count = 1
foreach ($m in $stylePattern.Matches($text)) {
    $style = $m.Groups[1].Value.Trim()
    if ($style -and -not $map.ContainsKey($style)) {
        $map[$style] = "migrated-inline-$('{0:000}' -f $count)"
        $count++
    }
}
$cssLines = @('/* Auto-generated migrated inline styles */')
foreach ($kv in $map.GetEnumerator() | Sort-Object Name) {
    $cssLines += ".${($kv.Value)} { ${($kv.Key)} }"
}
Add-Content -Path $cssPath -Value ($cssLines -join "`r`n")
$pattern = [regex]'<([^>]*?)\sstyle="([^"]*?)"([^>]*)>'
$text = $pattern.Replace($text, {
    param($m)
    $tagBody = $m.Groups[1].Value
    $style = $m.Groups[2].Value.Trim()
    $rest = $m.Groups[3].Value
    $className = $map[$style]
    if (-not $className) { return $m.Value }
    if ($tagBody -match 'class="([^"]*)"') {
        $existing = $matches[1].Value
        $tagBody = $tagBody -replace 'class="([^"]*)"', "class=\"$existing $className\""
    } else {
        $tagBody = "$tagBody class=\"$className\""
    }
    return "<$tagBody$rest>"
})
Set-Content -Path $indexPath -Value $text
Write-Output "Migrated $($map.Count) unique inline style values to $cssPath and updated $indexPath."
