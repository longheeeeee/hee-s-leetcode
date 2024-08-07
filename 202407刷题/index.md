1. 数组
主要解题思路为二分法、双指针、滑动窗口、模拟
## 二分法
二分法要注意边界，上取整还是下取整，用于有序列表查找，题目变体可能是查找近似数，如查找平方根等
## 双指针
数组中，用于解决覆盖问题，比如删除，跳过等，前面指针定义为操作中，后面指针用于跳过某些数据，后面指针往前面指针进行覆盖
## 滑动窗口
用于查找满足条件的连续子数组，也是用双指针来实现，前指针用于扩展，后指针在满足条件的情况下尝试收缩
# 模拟
螺旋矩阵，只要想到怎么填，代码直接模拟就好
## 相关题目
704 二分查找
35 搜索插入位置
34 在排序数组中查找元素的第一个和最后一个位置
69 x 的平方根
367 有效的完全平方数
27  移除元素
26 删除排序数组中的重复项
283 移动零
844 比较含退格的字符串
977 有序数组的平方
209 长度最小的子数组
59 螺旋矩阵II

2. 链表
基础操作为查找、删除、新增、翻转、拼接，特殊题目为判断环形链表
很多时候都需要添加虚拟头节点，特别是删除，可能会删除到头节点，丢失引用
判断环形链表使用快慢指针，只要相遇即可、需要注意判断环形链表相交处
## 环形链表相交处
答案：相遇后，慢指针重置，两边同步走，相遇即为入口
快慢指针相遇时，快指针走了2k、慢指针走了k、假设相遇处和入口处相差m，那么链表开始处距离入口处即为k-m，剩下的大半圈为x，快指针走了2k，2k = x + m + m + (k - m)，x = k-m
## 相关题目
203 移除链表元素
707 设计链表
206 反转链表
24 两两交换链表中的节点
19 删除链表的倒数第N个节点
160 链表相交
142 环形链表II

3. 哈希表
常用数据结构，用于判断是否存在、是否是不同顺序的完全子集等
特殊题目为两数、三数、四数之和、四数相加
## 两数之和
寻找和为n的两个数
一个循环生成map，一个循环查找差
## 四数相加
四个数分成了四个数组，所以俩俩排序后按照两数之和来计算
## 三数之和
其实使用的不是哈希表、需要使用双指针
需要先排序，固定一个数i，然后使用双指针l和r，总和大了则r--，小了则l++，如果没找到则i++
## 四数之和
跟三数之和一样，多了一层for循环

## 相关题目
242 有效的字母异位词
383 赎金信
49 字母异位词分组
438 找到字符串中所有字母异位词
349 两个数组的交集
350 两个数组的交集 II
202 快乐数
1  两数之和
454 四数相加II
15  三数之和
18  四数之和

4. 字符串
基本上按照数组来做，反转、替换等
有时候需要整串反转、再单独反转、匹配的时候需要使用双指针来跳过一些空白等元素
## 特殊题型：KMP算法
用于字符串查找匹配
核心就是匹配失败的时候，记录已经匹配过的数据，继续匹配，而不是重新进行匹配
算法核心是构造next数组，利用next数组来进行回退
next数组存放的是当前模式串每位的最长相同前后缀
## 相关题目
344 反转字符串
541  反转字符串II
151 翻转字符串里的单词
28  实现 strStr()
459 重复的子字符串


5. 栈与队列
1. 栈实现队列
使用inputstack和outputstack，output的时候从output取，没有就从input一个一个往里塞
2. 队列实现栈
每次出的时候都需要把队列出剩下最后一个元素，返回，再复原队列
3. 滑动窗口最大值
单调队列。窗口在滑动的时候，只要出现了最大值，最大值前面的是没有意义的，所以只需要记录最大值和比它小的值就好
4. 前k个高频元素
小顶堆。统计出现次数后，使用大小为k+1的小顶堆来排序，最小的会被pop出去

相关题目
232 用栈实现队列
225  用队列实现栈
20  有效的括号
1047  删除字符串中的所有相邻重复项
150  逆波兰表达式求值
239  滑动窗口最大值
347 前 K 个高频元素

6. 二叉树
需要掌握DFS和BFS
其中实现前后序遍历比较简单，就用BFS就好，但是中序遍历不一样
## 中序遍历
使用指针，往左遍历，同时进栈，如果为空，则出栈并且往右节点遍历
## 最大、最小深度
最大深度需要完全遍历，最小深度用BFS就好
## 对称二叉树
双指针，分开左右子树，从外侧/里侧到里侧/外侧进行遍历
## 完全二叉树
计算节点个数，采用递归，计算每个子树是否是满二叉树，使用双指针，同时计算层数，用2^n - 1公式计算
## 使用X序遍历构造二叉树
核心是：前序遍历，根节点在第一位，后序遍历，根节点在最后一位，然后中序找到根节点后就可以区分左右子树
## 最近公共祖先
使用DFS，区分情况
1. 分别在左右子树中，当前节点就是最近公共祖先
2. 当前节点是其中一个，另一个节点在其中一个子树中
## BST二叉搜索树
特点是从左到右排序，实际上就是一个排序数组
### BST的插入、删除操作
插入：跟二分一样，找到之后插入空位就是了，不需要改变结构
删除：需要改变结构，把左子树插入到右子树的最左边就好

相关题目
144 二叉树的前序遍历
94 二叉树的中序遍历
145 二叉树的后序遍历
102 二叉树的层序遍历
107 二叉树的层次遍历II
199 二叉树的右视图
637 二叉树的层平均值
429 N叉树的层序遍历
515 在每个树行中找最大值
116 填充每个节点的下一个右侧节点指针
117 填充每个节点的下一个右侧节点指针II
104 二叉树的最大深度
111 二叉树的最小深度
226 翻转二叉树
101  对称二叉树
104 二叉树的最大深度
111 二叉树的最小深度
222 完全二叉树的节点个数
110 平衡二叉树
257  二叉树的所有路径
404 左叶子之和
513 找树左下角的值
112  路径总和
106 从中序与后序遍历序列构造二叉树
105 从前序与中序遍历序列构造二叉树
654 最大二叉树
617 合并二叉树
700 二叉搜索树中的搜索
98 验证二叉搜索树
530 二叉搜索树的最小绝对差
501 二叉搜索树中的众数
236  二叉树的最近公共祖先
235  二叉搜索树的最近公共祖先
701 二叉搜索树中的插入操作
450 删除二叉搜索树中的节点
669  修剪二叉搜索树
108 将有序数组转换为二叉搜索树
538 把二叉搜索树转换为累加树

# 回溯
回溯就是DFS，暴力解法加上剪枝
要想清楚每一步可以做什么，一般是新增一个选择，能选什么？
比如n皇后，就是每行选一个位置放棋子，再判断能不能放
数独就是选一个位置，放一个数字，判断数字是否合法
终止条件：什么时候停止？停止后做什么？
## 同层剪枝
用于去重， 相同数字必须关注，第一层选了1，后续选2，回溯后如果还有1就不能再选了，不然后面会再加上一个2

# 动态规划
一般用于求最大价值，多少种方法，多少种组合/排列
动态规划的核心就是这一步结果可以通过上一步的结果来推出
步骤就是
1. 定义`dp[i][j]`是什么
2. 初始状态是什么
3. 确定当前状态跟上一个状态的关系，是相加还是取大值？
4. 滚动数组做优化
## 01背包
### 问题定义
把数量有限的物品放进容量固定的背包中，选项有价值和重量两个维度
### dp数组定义
`dp[i][j]`指的是考虑物品i后(可能不放进),背包容量为j的最大价值是什么
### 初始化
初始化全0，背包容量为0，价值也是0
### 遍历
先遍历物品，再遍历容量，每一个物品考虑放/不放两种情况，取最大值
不放物品的话，就是`dp[i-1][j]`的价值，因为没动
放物品的话，容量就是当前背包容量`j` - 当前物品重量`weight[i]`后，背包的最大价值，比如当前背包是10，物品重量是3，那就是背包为7的最大价值加上物品价值
`dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - weight[i]] + value[i])`
### 滚动数组优化
每一个物品都是在上一个物品的基础上添加的，所以可以使用一个数组滚动遍历就好，需要注意的是，滚动数组在遍历的时候需要从后往前遍历，不然会污染数据

## 完全背包
物品数量无限，可以多次选择，同样有价值和重量两个维度
01背包考虑的是放/不放，完全背包考虑的是，放哪个？
比如硬币有`[1,2,5]`，就需要遍历这三个物品，考虑三个物品放进去的上一个状态是什么
- 有一个重要的考虑是，遍历顺序的选择，是求组合还是求排序
求组合的话，要先遍历物品再遍历背包容量，这样就不会重复放进背包了
求排列的话，先遍历背包，物品会重复放进去
```
for (let i = 0; i < bagWeight; i++) {
  for (let j = bagWeight; j >= 0; j--) {
    if (j - weight[i] > 0) {
      dp[j] = Math.max(dp[j], dp[i - weight[i]] + value[i])
    }
  }
}
```

# 单调栈
单调栈用于计算左/右边第一个比它大的元素
## 接雨水
核心是找到当前列左边比它大和右边比它大的元素，然后计算出这层的面积
当使用单调栈时，从大到小入栈，直到碰到更大的元素时，对于栈顶元素而言，就是右围墙，左围墙就是栈内下一个元素



