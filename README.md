# NJS_RedirectionLoadBalancer

## 简介

基于 Nginx JS 封装的重定向负载均衡器，实现自动转发请求至不同地址的功能。镜像大小约22MB

## 使用说明

在项目目录执行 docker-compose up -d 即可部署，使用 `curl -I 127.0.0.1:8080` 测试随机重定向
