+++
draft = false
date = "2017-03-18T10:00:00"
title = "Vim: Save an opened file as a root user"
+++


If you have opened a file in vim as non root user but you want to save the changes as root user. 

        :w !sudo tee %
