@echo off
DEL Release\com.elgato.test.streamDeckPlugin
DistributionTool.exe -b -i com.elgato.test.sdPlugin -o Release
echo Created!
PAUSE