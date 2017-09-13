+++
draft = false
date = "2017-03-22T10:00:00"
title = "zsh: Avoid duplicate in shell history"
+++

Add the following line to your .zshrc 
    
    export HISTCONTROL=ignoreboth:erasedups
