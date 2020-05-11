---
title: Dos
---

## Network

> 1. `nslookup xx域名`
>
>    查看对应域名的**IP**地址信息和DNS解析信息
>
> 2. `ipconfig`
>
>    查看网络配置
>
>    `/all`: 查看所有ip地址信息包括，dns等
>
>    `/release`: 释放获取到的DHCP信息
>
>    `/renew`: 重新获取DHCP信息
>
>    [^renew]:有IP的情况下，执行续约操作, 无IP的情况下重新获取
>
>    `displaydns`: 显示本地已经解析过的dns记录

## File

> 1. `mkdir xxname`
>
>    创建文件夹
>
> 2. `dir`
>
>    列出当前路径下的所有**文件夹和文件**信息
>
> 3. `ls`
>
>    列出当前路径下的**文件**信息
>
>    `-ah` ：显示所有**隐藏**的文件

## UserManage

> 1. `net user xxname /add`
>
>    添加一个普通用户
>
>    `net user xxname xxpwd` : 创建用户并设置密码
>
>    其他使用：net user /?
>
> 2. `whoami /user`
>
>    查看当前用户名称和SID
>
>    [^SID]:Security Identifiers，SID,安全标识符，安全标识符（Security Identifiers，SID），是标识用户、组和计算机帐户的唯一的号码。
>
> 3. `net localgroup`
>
>    查看本地用户组
>
> 4. `net share`
>
>    查看当前共享的文件标识符
>
>    => 系统会默认启动-共享**C\$,D\$**这样子的话，会有些黑客会通过这样的共享方式
>
>    进行访问磁盘的操作不安全，所以需要实现：禁用这样子的默认共享
>
>    打开注册表。在HKEY_LOCAL_MACHINE \SYSTEM \CurrentControlSet \Services \lanmanserver \parameters下建立一个DWORD值，
>
> 将**AutoShareServer**和**AutoShareWks**数值配置为0即可!
>

### Shutdown-系统定时关机命令

> 1. 在指定时间执行关机操作
>
>    **at 00:00 shutdown -s** (00:00就是对应的时间的24h制)。
>
> 2. 取消关机命令
>
>    `shutdown -a` 。
>
> 3. 在多少秒之后执行关机
>
>    `shutdown -s -t 60` =>在60s之后执行关机操作。
>
> 4. win7~win10-已经弃用at,所以得使用schtasks-在服务里需要启动这个task的服务
>
>    在控制台里执行这个目前需要**关掉提示的弹出框才会执行**：
>
>    开启：`schtasks /create /tn “关机” /tr “shutdown /s” /sc once /st 22:40`，
>
>    删除：`schtasks /delete /tn “关机”`。
