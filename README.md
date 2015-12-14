>>> git checkout develop
    # 切换到`develop`分支

    >>> git checkout -b feature-discuss
    # 分出一个功能性分支

    >> touch discuss.js
    # 假装discuss.js就是我们要开发的功能

    >> git add .
    >> git commit -m 'finish discuss feature'
    # 提交更改

    >>> git checkout develop
    # 回到develop分支

    >>> git merge --no-ff feature-discuss
    # 把做好的功能合并到develop中

    >>> git branch -d feature-discuss
    # 删除功能性分支

    >>> git push origin develop
    # 把develop提交到自己的远程仓库中 