# ssh 公钥
先检查Git的全局设置
git config --list

如果user.name和user.email和自己想要设置的一样，那么可以跳过这一步。如果不一样，想要进行Git 的全局配置，那么就要使用以下命令
git config --global user.name "想要设置的name"
git config --global user.email "你的邮箱"

查看Git的全局配置，确保正确
git config --list

修改本地.ssh
ssh-keygen -t rsa -C "之前设置的邮箱"

打开C:\Users\你的用户名\.ssh\id_rsa.pub，复制id_rsa.pub文件里的全部内容

打开GitHub或码云上的设置，打开ssh公钥。粘贴生成即可解决