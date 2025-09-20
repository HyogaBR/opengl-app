@echo off
setlocal enabledelayedexpansion

REM remove a pasta build antiga, se existir
if exist build rmdir /s /q build

REM cria pasta nova
mkdir build
cd build

REM roda cmake com GCC + Ninja
cmake -G "Ninja" ^
  -DCMAKE_C_COMPILER=gcc ^
  -DCMAKE_CXX_COMPILER=g++ ^
  ..

ninja