# 自动重启golang项目

监听goalng项目的文件改动，自动编译并重启golang项目

# 安装

 - 安装nodejs环境, 然后在本项目根目录执行命令

```
npm i -g
```

# 使用

在golang项目根目录执行

```
gowatch 入口文件.go
```

如

```
gowatch cmd/securitydoc/securitydoc.go
```

> 为什么不用golang写这个工具呢？ 答曰：不会啊