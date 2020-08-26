@echo off
DEL Release\com.daikin.controller.streamDeckPlugin
DistributionTool.exe -b -i com.daikin.controller.sdPlugin -o Release
echo Created!
PAUSE