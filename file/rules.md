为了 Minecraft 中 Mod 翻译的统一，以及 Weblate 翻译项目的规范，本文档在社区原有规范文档的基础之上做了部分演绎和扩充，希望各位参与模组翻译的汉化者能尽量遵守本文档中的一些指示，将翻译文件标准化。

如果你对本文档存在建议，或者想要联系我们，请访问我们的 [Discord](https://discord.gg/SGve5Fn) 群组。

依然遵循原文，采用 [WTFPL](http://www.wtfpl.net/about/) 协议，同时附上原文链接：<https://github.com/Meow-J/Mod-Translation-Styleguide>。

## 01.普适原则

- **以原文为准**，除非原文实在无法简明翻译，不要存在意译
	- 原文一般为 `en_us.lang` 文件内的内容
	- 但如果是日站 Mod 或者其它语言的 Mod 请参考对应的源语言文件
    - 原文确定是作者生造词且无特殊含义，可采用音译（比如 [Environmental Tech](https://minecraft.curseforge.com/projects/environmental-tech) 模组）
- 在翻译之前熟悉翻译词条的位置，以及对应物品或者选项的功能，确保能知道语境下词条的真正意义
- 符合中文表达习惯，如果无法转换则改写句子形式
	- 比如手册中存在的定语从句
	- 原文：`The Red Cedar Tree is a large tree that has magical properties.`（[Totemic](https://minecraft.curseforge.com/projects/totemic) 模组）
	- 译文：`高大无比的红柏树有着魔法的属性。`
- 对于可以翻译的词都需要翻译，除非有特殊的语境（如 Botania 的更新日志）
- 对于那些没有翻译的条目，或者翻译与原文完全一致，则可以直接复制英文原文
- 对于不知道怎么翻译，提交时有暂未翻译的条目，请直接跳过这些条目，不要从 `en_us.lang` 中复制英文原文
- 如果是通过 GitHub 提交，请注意语言文件应当为 `UTF-8 without BOM` 的编码
- 提交后请从[该页面](https://github.com/CFPAOrg/Minecraft-Mod-Language-Package/releases/latest)下载资源包进行加载，进入游戏进行查看，确保翻译效果符合预期

## 02.保留字符（串）

- 某些词条中出现的 `%s`、`%d` 等格式字符或以 `%` 围起来的字符串（如 `%msg%`），请保留这些字符串，并可以根据中文语序做出调整，它们会在代码中被替换为对应的文本，如果不确定最终效果，请打开游戏进行测试
- 注意百分号是全角还是半角，切勿直接使用必应、谷歌翻译标点符号
- 在某些 Mod 的手册中会使用 `<br>` 作为换行符，遇到时请保留
- 某些 Mod 使用 `&` 或者 `§` 后加一个字符或者数字表示颜色或者格式，在此标识出现后的文字都将变成对应的颜色或者格式，一般使用 `&0` 或者 `§0` 恢复默认颜色，`&r` 或者 `§r` 恢复默认格式。遇到时请保留，并将其放到对应文本两侧
	- 具体字符含义请参考 Minecraft Wiki：[Formatting Codes](http://minecraft.gamepedia.com/Formatting_codes)
- 在遇到 tellraw JSON 字符串的时候，请**仅**翻译 `"text"` 项的值，对于其它的键和值请保留均不翻译
	- 原文：`{"text":" has shared a ","color":"blue"}`（[Botania](https://github.com/Vazkii/Botania)，Vazkii）
	- 译文：`{"text":"分享了一本","color":"blue"}`
- 少数 Mod 使用 XML 格式的语言文件，对于这种文件请保留以 `<` 和 `>` 开头结尾的标签
- 能量单位（EU、MJ 等）请保留不翻译
- 按键（如 Shift、Ctrl 等）请不要翻译，并将首字母大写（部分模组语言文件会将 Shift 键描述为 `Sneak`）
- 指令（如 `/say`，`/effect`）以及明文参数请保留不要翻译，而解释性参数则需要翻译
	- 原文：`/achievement <give|take> <name|*> [player]`（Minecraft，Mojang）
	- 译文：`/achievement <give|take> <成就名|*> [玩家]`

## 03.标点符号

> Weblate 上的汉化资源包中添加了 3TUSK 书写的中文全角标点修复补丁，现在全角标点均按照正常的宽度显示。

- 请与原版 Minecraft 保持统一，使用中文的标点符号。如果是保留不翻译的英文中的标点符号，则仍保留英文的标点符号
	- 原文：`Weighted Pressure Plate (Heavy)`（Minecraft，Mojang）
	- 译文：`测重压力板（重质）`
- 遵守《标点符号用法》：[GB(T)15834-2011](http://people.ubuntu.com/~happyaron/l10n/GB(T)15834-2011.html)
- 对于英文标点符号前或后的空格，请在修改标点符号为中文时删除
- 仅修改文本当中的标点符号，对于 JSON 的格式标点符号请保留

> 关于中文全角标点的显示问题，请跟踪 [MC-109260](https://bugs.mojang.com/browse/MC-109260)，如果可以的话，请 Vote 一下这个 Issue，或者回复一下“confirmed”，让开发者能够看到这个 Issue。

## 04.排版
- 当遇到英文字母、阿拉伯数字等非中文文本时，应在该段文本开头与结尾处加空格与中文文本分开
	- 原文：`JEI must be on the server to handle this Chat Command, it is too long for Minecraft to send.`（[Just Enough Items](https://github.com/mezz/JustEnoughItems/blob/1.12/src/main/resources/assets/jei/lang/en_us.lang), mezz）
	- 译文：`JEI 必须安装于服务器上，方能处理本指令，这条指令对 Minecraft 来说太长了。`
	- 对于物品名来说也应如此做。
		- 原文：`TIS-3D Reference Manual` ([TIS-3D](https://github.com/MightyPirates/TIS-3D/blob/master-MC1.11/src/main/resources/assets/tis3d/lang/en_US.lang#L4), fnuecke, et al.)
		- 译文：`TIS-3D 参考手册`
	- 不适用于有特殊规定的专有名词
- 数字与单位之间应留有空格
- 全角标点与其他字符之间不必留空格
	- 原文：`While simple in theory, in practice it was a little difficult. For my simple network at the time, the activation cost was quite steep because of the initial pressure required, and the drain for each source of lava was not something I was prepared for. (20000 LP to activate, 500 LP per source block)`（[Blood Magic](https://github.com/WayofTime/BloodMagic/blob/1.9/src/main/resources/assets/bloodmagicguide/lang/en_US.lang), WayOfTime, et al.）
	- 译文：`然而这只是理论。说起来容易做起来难：当时我使用的简易网络完全不适合拿来为这个仪式供应魔力，不仅挤压熔岩需要的压力巨大（需要 20000 LP 启动仪式），抽取熔岩的开支也不小（每产生一格熔岩需要 500 LP）。`

## 05.专有名词

- 人名/生物名/商标名/唱片名
	- 有通用翻译的外文人名或商标，则进行翻译
		- 如翻译牛顿、阿基米德等
	- 出现神话或故事中出现的人物或怪物名请首先搜索流行译名，如果找不到的话则音译
		- 原文：`Baykok`（[Totemic](https://github.com/TeamTotemic/Totemic)，TeamTotemic）
		- 译文：`贝柯克`
	- 指 Mod 社区的某个人物，或贡献列表中的人物，或者已有商标，唱片等无中文翻译的则保留不翻译
		- 如 `Vazbee`（[Magic Bees](https://github.com/MagicBees/MagicBees)，MysteriousAges, Arkandos, mezz, et al.）
		- 原文：`Patreon Pie`（[Pam's HarvestCraft](https://github.com/MatrexsVigil/harvestcraft)，MatrexsVigil）
		- 译文：`Patreon 派`
	- 对于其它的名字，保留原文不翻译
- 对于原版中出现过的词语请根据 Minecraft Wiki 上的[译名标准列表](http://minecraft-zh.gamepedia.com/Minecraft_Wiki:%E8%AF%91%E5%90%8D%E6%A0%87%E5%87%86%E5%8C%96)进行翻译（注意默认方块、实体、物品是隐藏的，需要手动点击显示）
- 目前可以**参考**原工程的[译名标准化列表](https://github.com/Meow-J/Mod-Translation-Styleguide/blob/master/glossary.md)进行翻译
- 如果还没有找到，请自行拟定翻译并发送 PR 更新本工程的译名标准化列表，如果实在无法想出翻译，则暂时留为英文

## 06.语言

- 对于语言的正式程度，请参见词条原文
	- 如果原文非常正式，那么请不要玩梗或卖萌
		- 原文：`This pair of enchanted boots have been stuffed full of magic to ease the journey of any traveler.<BR>They allow you to move faster than normal. They also allow you to jump higher and fall further.`（[Thaumcraft 5](https://github.com/Azanor/thaumcraft-5)，Azanor，节选）
		- 译文：`这双富含神秘的魔力工艺技巧的靴子能让任何旅行者的旅途变得更轻松愉快。<BR>它能够让你移动得比平常更加迅速，并且能够直接掠过较高的台子。它也能够让你跳得更高，落得更远。`
	- 如果原文本身就在玩梗，或者语气非常轻松，那么也不需要使用非常正式的语言
		- 原文：`NANI SORE!? BOTANIA IS OUTDATED!?`（[Botania](https://github.com/Vazkii/Botania)，Vazkii）
		- 译文：`(つд⊂)なにそれ！？植物魔法版本落后了！？`
- 如果原文使用了拉丁化的日语，请将其重写为日语原文
- 如果原文使用了游戏电影等中的梗，请首先参考原出处的中文翻译，如果是日语而没有统一的翻译，则改写为日语原文（在此情况下请保持翻译与否的统一）
	- 原文：`You notice Botania has updated. It fills you with determination.`（[Botania](https://github.com/Vazkii/Botania)，Vazkii，梗出自于Undertale）
	- 译文：`你注意到植物魔法已经更新了。这使你充满了决心。`
- 如果你自己做了一版卖萌形式或者玩梗形式的汉化文件，请不要发送到作者那里作为默认的汉化文件，仅流传在第三方就行了
- 切勿在语言文件中玩恶俗，月莫之类的梗

## 07.Mod 名翻译

- 这里的 Mod 名指的是语言文件内的 Mod 名
- 翻译 Mod 名前请至少将整个 Mod 通玩一边，熟悉 Mod 的特性与系统
- 如果是国产 Mod，则中文名采用 Mod 作者自定义的名称
- 如果是经典 Mod，有早已熟知唯一译名，则采用该熟知译名
    - `IndustrialCraft2` -> `工业时代 2`
    - `Twilight Forest` -> `暮色森林`
- 如果Mod名为术语或者单词翻译不存在歧义，则采用翻译名
    - `Forestry` -> `林业`
    - `Logistics Pipes` -> `物流管道`
    - `Chisel` -> `凿子`
- 如以上均不符，则在汉化文件内保留英文，民间翻译仅供流传使用。有一定用户量后，如果某一民间翻译人气非常高，则之后会采用人气最高版本的翻译（如 Minecraft，我的世界）
- 部分模组存在多组分栏，建议统一采用 `模组名丨分栏名` 进行书写，中间的竖线为汉字 `丨(gùn)` 
    - `Forestry Apiculture` -> `林业丨养蜂`

## 08.署名

- 除非作者在语言文件中专门提供了翻译者署名的地方，请不要添加任何其它标识标明翻译者的名字，特别是作者让你签署 CLA 的情况。你的贡献将会在文件上方的 Contribution 处显示
- Weblate 上所有的翻译都会通过 GitHub 的 commit 信息查询到，请在注册 Weblate 账户时候尽可能选取 GitHub 注册时候使用的邮箱和用户名

## 09.相关工具

- GWYOG 的 [LocalizationAssistant](https://github.com/GWYOG/LocalizationAssistant)（运行需要 Java 运行环境，**推荐**）
- Snownee 写的一个[在线网页工具](https://snownee.github.io/l10n-tools/update.html)
- craft 之前写的一个[文本更新检测工具](https://github.com/crafteverywhere/Craft_Minecraft_Mod_Localization/blob/master/lang_checker.py)（运行需要 Python 3+ 环境）
- GitHub [语言文件关键字查询](https://github.com/Meow-J/Mod-Translation-Styleguide/blob/master/tools/GithubKeywordQuery.py)（需要 Python 3.4+ 环境）
- 3TUSK 的[文本自动更新工具](https://github.com/3TUSK/TemporaryLocalization/blob/1.9/Tool_Update.lua)（运行需要 Lua 5.3+ 运行环境)

## 10.参考资料

 - [中文文案排版指北](https://github.com/mzlogin/chinese-copywriting-guidelines)
