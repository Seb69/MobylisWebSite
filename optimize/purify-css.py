#!/usr/bin/python
import os

listJS = [];
listCSS = [];

buildFolder = "../dist/"

for file in os.listdir(buildFolder):

  if file.endswith(".bundle.js"):
    listJS.append(buildFolder + file)

  if file.endswith(".bundle.css"):
    listCSS.append(buildFolder + file)


os.system("purifycss " +
          listCSS[0] + " " +
          listJS[0] + " " +
          listJS[1] + " " +
          listJS[2] + " " +
          listJS[3] + " " +
          "--min --info " +
          "--out " + listCSS[0])

