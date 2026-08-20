// ============================================================
//  📦 易经 · 数据仓库 (yj-data.js) — 64卦完整版
//  数理·格物：简谐运动 · 化学平衡 · 地质力学 · 生态学
// ============================================================
const YJ_DATA = {

    // ===== 上经 · 乾 ～ 离 =====
    'qian': {
        title: '乾·元亨利贞',
        tag: '正弦周期',
        chapter: '《易经》乾卦',
        quote: '天行健，君子以自强不息。',
        explain: '正弦波起起伏伏如天道刚健，六爻对应六个波段的跃迁。',
        func: 'sine',
        defaultParam: 1.0,
        science: {
            field: '⚙️ 物理学 · 简谐运动',
            concept: '弹簧振子的位移-时间图像为正弦波，六爻如六个波段的能量转换。',
            experiment: '🧪 弹簧振子演示：位移与时间的正弦关系。',
            challenge: '结合“亢龙有悔”，用能量守恒解释为何“知进退”是长久之道？'
        }
    },
    'kun': {
        title: '坤·厚德载物',
        tag: '余弦周期',
        chapter: '《易经》坤卦',
        quote: '地势坤，君子以厚德载物。',
        explain: '余弦波相位滞后于正弦，如同地壳岩石承受应力的弹性滞后。',
        func: 'cosine',
        defaultParam: 1.0,
        science: {
            field: '🌍 地质学 · 弹性滞后',
            concept: '岩石受力后形变滞后于应力，如同余弦波相对于正弦的相位延迟。',
            experiment: '🧪 橡皮筋拉伸回缩滞后：撤去外力后橡皮筋缓慢回缩。',
            challenge: '地壳应力积累临界释放（地震），谈量变引起质变？'
        }
    },
    'zhun': {
        title: '屯·万物始生',
        tag: '指数函数',
        chapter: '《易经》屯卦',
        quote: '屯，元亨利贞。勿用有攸往，利建侯。',
        explain: '指数增长起步艰难，突破临界后势不可挡，如创业初期。',
        func: 'exp',
        defaultParam: 0.7,
        science: {
            field: '📈 创业学 · 创业S型曲线',
            concept: '企业生长在突破临界点前极为艰难，突破后呈指数增长。',
            experiment: '🧪 酵母菌有限培养基生长：突破临界后进入对数期。',
            challenge: '为何多数创新夭折于“屯”而跨越后就爆发？'
        }
    },
    'meng': {
        title: '蒙·启蒙',
        tag: '对数函数',
        chapter: '《易经》蒙卦',
        quote: '匪我求童蒙，童蒙求我。初筮告，再三渎，渎则不告。',
        explain: '学习曲线先缓后陡，主动求问才符合对数型有效学习。',
        func: 'log',
        defaultParam: 0.8,
        science: {
            field: '🧠 教育心理学 · 学习曲线',
            concept: '主动求知的学习效率远高于被动灌输，符合对数型有效学习模型。',
            experiment: '🧪 记忆遗忘与复习实验：主动复述优于被动阅读。',
            challenge: '主动提问为何比被动灌输更能引发认知跃迁？'
        }
    },
    'xu': {
        title: '需·等待',
        tag: '线性函数',
        chapter: '《易经》需卦',
        quote: '需于沙，小有言，终吉。',
        explain: '压力积累如弹簧压缩，等待释放时机，线性弹性阶段。',
        func: 'linear',
        defaultParam: 1.0,
        science: {
            field: '🔧 材料力学 · 胡克定律',
            concept: '弹性形变与外力成正比（F=kx），压力积累后释放需等待时机。',
            experiment: '🧪 弹簧秤拉力与伸长量：力与形变的线性关系。',
            challenge: '股市中如何辨别“合理回调”与“趋势反转”？'
        }
    },
    'song': {
        title: '讼·争讼',
        tag: '方波',
        chapter: '《易经》讼卦',
        quote: '有孚，窒惕，中吉，终凶。利见大人，不利涉大川。',
        explain: '冲突升级如方波跳变，非黑即白，势难持久。',
        func: 'square',
        defaultParam: 1.0,
        science: {
            field: '🎲 博弈论 · 纳什均衡与冲突',
            concept: '冲突中的非合作博弈常导致“方波式”的极端对立。',
            experiment: '🧪 囚徒困境博弈实验：个体理性导致集体非理性。',
            challenge: '如何通过“调解人”将方波转化为阻尼振荡？'
        }
    },
    'shi': {
        title: '师·统兵',
        tag: 'S型生长曲线',
        chapter: '《易经》师卦',
        quote: '师，贞，丈人吉，无咎。',
        explain: '群体行为从无序到有序呈S型生长，如蚁群行军。',
        func: 'sigmoid',
        defaultParam: 1.0,
        science: {
            field: '🐜 群体智能 · 自组织临界性',
            concept: '群体从无序到有序的自组织演化遵循S型曲线。',
            experiment: '🧪 蚂蚁觅食路径优化：信息素引导形成最优路径。',
            challenge: '如何设计规则让群体自发形成最优决策？'
        }
    },
    'bi': {
        title: '比·亲附',
        tag: '高斯分布',
        chapter: '《易经》比卦',
        quote: '比，吉。原筮，元永贞，无咎。',
        explain: '万有引力平方反比，距离近则凝聚，如钟形曲线吸引力。',
        func: 'gaussian',
        defaultParam: 0.7,
        science: {
            field: '🌌 天体物理 · 万有引力',
            concept: '引力与距离平方成反比，中心区域引力最强，呈钟形分布。',
            experiment: '🧪 卡文迪许扭秤实验：精确测量万有引力常数。',
            challenge: '为何社群“核心节点”总是少数？'
        }
    },
    'xiaoxu': {
        title: '小畜·小有积蓄',
        tag: '对数函数',
        chapter: '《易经》小畜卦',
        quote: '小畜，亨。密云不雨，自我西郊。',
        explain: '电容器充电电压趋近饱和，缓慢积累符合对数曲线。',
        func: 'log',
        defaultParam: 0.8,
        science: {
            field: '⚡ 电子学 · RC充电曲线',
            concept: '电容器充电时电压先快后慢，无限趋近饱和值（对数型）。',
            experiment: '🧪 电容充放电测量：RC电路的时间常数与充电曲线。',
            challenge: '留有余地为何比竭泽而渔更利于长期稳定？'
        }
    },
    'lv': {
        title: '履·践行',
        tag: '三角波',
        chapter: '《易经》履卦',
        quote: '履虎尾，不咥人，亨。',
        explain: '行走步态为三角波，柔和升降，交替支撑。',
        func: 'triangle',
        defaultParam: 1.0,
        science: {
            field: '🦿 生物力学 · 步态周期',
            concept: '人类行走时重心升降呈三角波，支撑与摆动交替。',
            experiment: '🧪 足底压力传感器测量：行走过程中足底压力分布。',
            challenge: '机器人如何模仿人类步态实现高效行走？'
        }
    },
    'tai': {
        title: '泰·小往大来',
        tag: '阻尼振荡',
        chapter: '《易经》泰卦',
        quote: '天地交，泰。后以财成天地之道。',
        explain: '阻尼振荡振幅渐小终归平衡，如同可逆反应达到动态平衡。',
        func: 'damped',
        defaultParam: 0.4,
        science: {
            field: '🧪 化学 · 勒夏特列原理',
            concept: '可逆反应达到动态平衡时，宏观浓度不再变化（如阻尼波归零）。',
            experiment: '🧪 碘化钾与三氯化铁可逆反应：溶液颜色振荡后趋于稳定。',
            challenge: '升温平衡移动，谈外部环境对系统平衡的调控智慧？'
        }
    },
    'pi': {
        title: '否·闭塞',
        tag: '锯齿波',
        chapter: '《易经》否卦',
        quote: '否之匪人，不利君子贞，大往小来。',
        explain: '生态崩溃呈锯齿状陡降，资源枯竭后无法恢复。',
        func: 'sawtooth',
        defaultParam: 1.0,
        science: {
            field: '🌿 环境科学 · 资源耗竭与崩溃',
            concept: '生态系统在资源超载后突然崩溃，呈锯齿状下降。',
            experiment: '🧪 藻类过度繁殖富营养化模拟：藻类爆发后溶解氧骤降。',
            challenge: '如何避免走入“否”卦的困局？'
        }
    },
    'tongren': {
        title: '同人·协同',
        tag: '正弦周期',
        chapter: '《易经》同人卦',
        quote: '同人于野，亨。利涉大川，利君子贞。',
        explain: '共振使振幅叠加，同频波相互加强，效能倍增。',
        func: 'sine',
        defaultParam: 1.0,
        science: {
            field: '🎵 声学 · 共振',
            concept: '同频的振动相互加强（共振），能量成倍放大。',
            experiment: '🧪 音叉共振演示：敲击一个音叉，另一个同频音叉起振。',
            challenge: '团队如何通过“频率匹配”激发整体创造力？'
        }
    },
    'dayou': {
        title: '大有·丰盛',
        tag: 'S型生长曲线',
        chapter: '《易经》大有卦',
        quote: '大有，元亨。',
        explain: '财富积累指数增长，但受环境限制终为S型。',
        func: 'sigmoid',
        defaultParam: 1.0,
        science: {
            field: '📊 经济学 · 逻辑斯蒂增长',
            concept: '财富增长受资源限制，最终呈现S型饱和曲线。',
            experiment: '🧪 有限资源细菌生长实验：细菌数量在资源耗尽后趋稳。',
            challenge: '财富增长饱和后如何实现“二次增长”？'
        }
    },
    'qian_de': {
        title: '谦·谦卑',
        tag: '阻尼振荡',
        chapter: '《易经》谦卦',
        quote: '谦，亨，君子有终。',
        explain: '负反馈系统通过抑制放大保持稳态，谦逊地调节自身。',
        func: 'damped',
        defaultParam: 0.4,
        science: {
            field: '🎛️ 控制工程 · 负反馈控制',
            concept: '负反馈抑制系统振荡，维持稳态，如谦逊的自我调节。',
            experiment: '🧪 恒温箱PID控制：温度偏离时负反馈将之拉回设定值。',
            challenge: '为何居功不傲者更容易获得长期成功？'
        }
    },
    'yu': {
        title: '豫·愉悦',
        tag: '锯齿波',
        chapter: '《易经》豫卦',
        quote: '豫，利建侯行师。',
        explain: '多巴胺释放呈锯齿状爆发后回落，快乐不可持续。',
        func: 'sawtooth',
        defaultParam: 1.0,
        science: {
            field: '🧠 神经科学 · 奖励机制与成瘾',
            concept: '多巴胺分泌表现为锯齿波：刺激时骤升，消退后骤降。',
            experiment: '🧪 条件反射多巴胺测量：奖励预期时多巴胺峰值出现。',
            challenge: '如何让快乐持续而不陷入“乐极生悲”？'
        }
    },
    'sui': {
        title: '随·随顺',
        tag: '余弦周期',
        chapter: '《易经》随卦',
        quote: '随，元亨利贞，无咎。',
        explain: '流线型物体顺应流体方向阻力最小，随势而行。',
        func: 'cosine',
        defaultParam: 1.0,
        science: {
            field: '💨 空气动力学 · 流线型减阻',
            concept: '顺应流体方向的流线型物体阻力最小，如“随”势而行。',
            experiment: '🧪 风洞不同形状物体阻力测试：流线型优于非流线型。',
            challenge: '何时坚持己见，何时该顺势而为？'
        }
    },
    'gu': {
        title: '蛊·治弊',
        tag: '二次函数（U型）',
        chapter: '《易经》蛊卦',
        quote: '蛊，元亨，利涉大川。先甲三日，后甲三日。',
        explain: '设备故障率呈浴盆曲线（U型），早晚期失效高。',
        func: 'quadratic',
        defaultParam: 1.0,
        science: {
            field: '🔧 可靠性工程 · 浴盆曲线',
            concept: '设备失效率呈U型：早期失效高，中期稳定，晚期老化升高。',
            experiment: '🧪 电子产品寿命测试：新设备早期故障率高于稳定期。',
            challenge: '如何通过定期“蛊”治来延长组织生命周期？'
        }
    },
    'lin': {
        title: '临·监临',
        tag: '高斯分布',
        chapter: '《易经》临卦',
        quote: '临，元亨利贞。至于八月有凶。',
        explain: '量子测量中观测行为干扰被观测量，闭环反馈。',
        func: 'gaussian',
        defaultParam: 0.7,
        science: {
            field: '⚛️ 量子力学 · 量子测量效应',
            concept: '观测行为本身会干扰被观测系统，测量结果服从概率分布。',
            experiment: '🧪 海森堡不确定性演示：位置与动量无法同时精确测量。',
            challenge: '过度监督是否会扼杀创新活力？'
        }
    },
    'guan': {
        title: '观·观察',
        tag: '高斯分布',
        chapter: '《易经》观卦',
        quote: '观，盥而不荐，有孚颙若。',
        explain: '望远镜成像为点扩散函数（高斯分布），观测即理解。',
        func: 'gaussian',
        defaultParam: 0.6,
        science: {
            field: '🔭 光学 · 点扩散函数',
            concept: '光学系统的成像表现为高斯型点扩散函数，观测过程即信息获取。',
            experiment: '🧪 望远镜成像实验：星体成像的衍射光斑呈高斯分布。',
            challenge: '我们观察到的世界是否只是“表象”？'
        }
    },
    'shihe': {
        title: '噬嗑·啮合',
        tag: '三角波',
        chapter: '《易经》噬嗑卦',
        quote: '噬嗑，亨，利用狱。',
        explain: '齿轮传动扭矩呈三角波周期变化，啮合传递动力。',
        func: 'triangle',
        defaultParam: 1.0,
        science: {
            field: '⚙️ 机械工程 · 齿轮传动扭矩',
            concept: '齿轮啮合时扭矩呈周期性三角波变化，传递稳定动力。',
            experiment: '🧪 齿轮箱振动测试：啮合频率与扭矩波动的关系。',
            challenge: '法律与惩罚是否像“啮合”一样维持社会运转？'
        }
    },
    'ben': {
        title: '贲·装饰',
        tag: '线性函数',
        chapter: '《易经》贲卦',
        quote: '贲，亨，小利有攸往。',
        explain: '表面涂层增加美观也增加摩擦，装饰与功能线性权衡。',
        func: 'linear',
        defaultParam: 1.0,
        science: {
            field: '🎨 材料表面工程 · 表面粗糙度与摩擦',
            concept: '表面粗糙度增加（装饰）会影响摩擦力，二者线性相关。',
            experiment: '🧪 不同纹理摩擦力测量：表面越光滑摩擦越小。',
            challenge: '现代包装是否过度“贲”而浪费资源？'
        }
    },
    'bo': {
        title: '剥·剥落',
        tag: '锯齿波',
        chapter: '《易经》剥卦',
        quote: '剥，不利有攸往。',
        explain: '岩石风化剥落呈锯齿状阶跃，一层层脱落。',
        func: 'sawtooth',
        defaultParam: 1.0,
        science: {
            field: '🌍 地质学 · 风化剥蚀',
            concept: '岩石在冻融循环中分层剥落，呈阶跃式锯齿状。',
            experiment: '🧪 岩石冻融循环实验：反复冻融导致岩石逐层剥落。',
            challenge: '事物衰败是否总从外表“剥”开始？'
        }
    },
    'fu': {
        title: '复·回复',
        tag: '正弦周期',
        chapter: '《易经》复卦',
        quote: '复，亨。出入无疾，朋来无咎。',
        explain: '系统受扰回归平衡，如弹簧简谐振荡，正弦回复。',
        func: 'sine',
        defaultParam: 1.0,
        science: {
            field: '⚡ 动力学 · 恢复力',
            concept: '偏离平衡的系统受恢复力驱动做简谐振荡，正弦回归。',
            experiment: '🧪 单摆摆动演示：偏离后摆回平衡，再偏离，循环往复。',
            challenge: '个人情绪如何从低谷“复”回正轨？'
        }
    },
    'wuwang': {
        title: '无妄·不妄',
        tag: '对数函数',
        chapter: '《易经》无妄卦',
        quote: '无妄，元亨利贞。其匪正有眚，不利有攸往。',
        explain: '随机噪声降低信噪比，需滤波去除，信号对数衰减。',
        func: 'log',
        defaultParam: 0.8,
        science: {
            field: '📡 信号处理 · 信噪比与滤波',
            concept: '随机噪声会降低信号质量，滤波后信噪比呈对数提升。',
            experiment: '🧪 加噪音频滤波实验：滤波后音频清晰度对数式提升。',
            challenge: '生活中如何区分“妄念”与“正念”？'
        }
    },
    'daxu': {
        title: '大畜·积蓄',
        tag: '对数函数',
        chapter: '《易经》大畜卦',
        quote: '大畜，利贞。不家食吉，利涉大川。',
        explain: '水库蓄水水位上升呈对数，放水指数衰减，调度如蓄畜。',
        func: 'log',
        defaultParam: 0.8,
        science: {
            field: '🌊 水利工程 · 水库调度',
            concept: '水库蓄水水位随时间呈对数上升，放水则指数衰减。',
            experiment: '🧪 水位变化模拟：上游来水与放水的动态平衡。',
            challenge: '如何平衡短期消费与长期储备？'
        }
    },
    'yi': {
        title: '颐·颐养',
        tag: 'S型生长曲线',
        chapter: '《易经》颐卦',
        quote: '颐，贞吉。观颐，自求口实。',
        explain: '能量代谢转化率呈S型，从消化吸收到储存。',
        func: 'sigmoid',
        defaultParam: 1.0,
        science: {
            field: '🍎 营养学 · 代谢效率',
            concept: '生物体能量转化效率呈S型，先快速提升后趋近饱和。',
            experiment: '🧪 热量摄入与消耗平衡：代谢率随年龄变化的S型曲线。',
            challenge: '“自求口实”与现代食品安全的关系？'
        }
    },
    'daguo': {
        title: '大过·过度',
        tag: '指数函数',
        chapter: '《易经》大过卦',
        quote: '大过，栋桡，利有攸往，亨。',
        explain: '系统过载呈指数级崩溃，过犹不及。',
        func: 'exp',
        defaultParam: 0.6,
        science: {
            field: '📊 系统动力学 · 过载失效',
            concept: '系统承受超载时失效概率呈指数增长，过犹不及。',
            experiment: '🧪 超载桥梁应力测试：超载比例与结构失效时间的指数关系。',
            challenge: '如何识别“大过”的临界信号？'
        }
    },
    'kan': {
        title: '坎·水险',
        tag: '正弦周期',
        chapter: '《易经》坎卦',
        quote: '习坎，有孚，维心亨，行有尚。',
        explain: '水流漩涡呈正弦涡动，暗藏危险与动力。',
        func: 'sine',
        defaultParam: 1.0,
        science: {
            field: '💧 流体动力学 · 涡流',
            concept: '水流在障碍物后形成交替涡旋（卡门涡街），呈正弦状。',
            experiment: '🧪 澡盆放水漩涡演示：排水时形成旋转涡流。',
            challenge: '风险与机遇是否总如“坎”般并存？'
        }
    },
    'li': {
        title: '离·火',
        tag: '指数函数',
        chapter: '《易经》离卦',
        quote: '离，利贞，亨。畜牝牛，吉。',
        explain: '燃烧反应速率呈指数加速，火势瞬间爆燃。',
        func: 'exp',
        defaultParam: 0.7,
        science: {
            field: '🔥 燃烧学 · 链式反应',
            concept: '火势在达到临界后呈指数加速蔓延（链式反应）。',
            experiment: '🧪 燃烧速率实验：不同氧气浓度下火焰蔓延速度对比。',
            challenge: '如何掌控“火”的能量而不被反噬？'
        }
    },

    // ===== 下经 · 咸 ～ 未济 =====
    'xian': {
        title: '咸·感',
        tag: '正弦周期',
        chapter: '《易经》咸卦',
        quote: '咸，亨，利贞。取女吉。',
        explain: '电磁感应中磁场变化感应电动势，正弦互感。',
        func: 'sine',
        defaultParam: 1.0,
        science: {
            field: '🧲 电磁学 · 电磁感应',
            concept: '变化的磁场产生感应电动势，其波形为正弦。',
            experiment: '🧪 法拉第线圈实验：磁铁插入/拔出线圈时产生感应电流。',
            challenge: '“感”的过程是物理的还是心理的？'
        }
    },
    'heng': {
        title: '恒·恒久',
        tag: '线性函数',
        chapter: '《易经》恒卦',
        quote: '恒，亨，无咎，利贞。利有攸往。',
        explain: '牛顿第一定律惯性运动，匀速直线最为恒久。',
        func: 'linear',
        defaultParam: 1.0,
        science: {
            field: '⚙️ 经典力学 · 惯性',
            concept: '不受外力物体保持匀速直线运动，最“恒久”的状态。',
            experiment: '🧪 气垫导轨匀速实验：滑块在气垫上近乎匀速滑动。',
            challenge: '什么是情感和事业中的“恒”？'
        }
    },
    'dun': {
        title: '遁·退避',
        tag: '对数函数',
        chapter: '《易经》遁卦',
        quote: '遁，亨，小利贞。',
        explain: '生物趋避行为呈对数响应，远离不利刺激。',
        func: 'log',
        defaultParam: 0.8,
        science: {
            field: '🧬 行为学 · 趋避反应',
            concept: '生物对不利刺激的规避行为呈对数型响应，先快后慢。',
            experiment: '🧪 电击回避实验：动物在电击后迅速躲避，之后逐渐适应。',
            challenge: '何时“遁”才是智慧而非懦弱？'
        }
    },
    'dazhuang': {
        title: '大壮·壮盛',
        tag: '指数函数',
        chapter: '《易经》大壮卦',
        quote: '大壮，利贞。',
        explain: '细胞膨胀呈指数分裂，壮盛之后必衰。',
        func: 'exp',
        defaultParam: 0.7,
        science: {
            field: '🧬 细胞生物学 · 有丝分裂',
            concept: '细胞分裂呈指数增长，但分裂次数有限，壮盛后必然衰老。',
            experiment: '🧪 细胞培养增殖：细胞在培养皿中呈指数分裂后进入平台期。',
            challenge: '如何避免“大壮”之后的急速陨落？'
        }
    },
    'jin': {
        title: '晋·前进',
        tag: 'S型生长曲线',
        chapter: '《易经》晋卦',
        quote: '晋，康侯用锡马蕃庶，昼日三接。',
        explain: '科技进步呈S型扩散，但进化的底层是渐变积累。',
        func: 'sigmoid',
        defaultParam: 1.0,
        science: {
            field: '📱 科技史 · 技术演化',
            concept: '新技术采用呈S型扩散，底层演化却是渐进的积累。',
            experiment: '🧪 科技产品普及曲线：从发明到普及的S型轨迹。',
            challenge: '“进”与“退”如何辩证统一？'
        }
    },
    'mingyi': {
        title: '明夷·伤',
        tag: '锯齿波',
        chapter: '《易经》明夷卦',
        quote: '明夷，利艰贞。',
        explain: '损伤累积呈锯齿状骤降，如材料疲劳断裂。',
        func: 'sawtooth',
        defaultParam: 1.0,
        science: {
            field: '🔧 疲劳力学 · 疲劳断裂',
            concept: '材料在循环加载下性能呈锯齿状下降，最终突然断裂。',
            experiment: '🧪 金属疲劳试验：循环应力导致裂纹扩展并断裂。',
            challenge: '如何从“明夷”中吸取教训而重生？'
        }
    },
    'jiaren': {
        title: '家人·家庭',
        tag: '高斯分布',
        chapter: '《易经》家人卦',
        quote: '家人，利女贞。',
        explain: '家庭网络呈高斯分布，核心成员连接最多。',
        func: 'gaussian',
        defaultParam: 0.7,
        science: {
            field: '🌐 社会网络 · 网络中心性',
            concept: '家庭中核心成员连接最多，连接数分布近似高斯钟形。',
            experiment: '🧪 社交网络分析：节点连接数的分布规律。',
            challenge: '现代家庭结构是否正在走向“高斯”离散？'
        }
    },
    'kui': {
        title: '睽·乖离',
        tag: '方波',
        chapter: '《易经》睽卦',
        quote: '睽，小事吉。',
        explain: '意见分歧如方波对立，非此即彼。',
        func: 'square',
        defaultParam: 1.0,
        science: {
            field: '🧠 社会心理学 · 认知冲突',
            concept: '意见分歧时观点极化呈方波状，非此即彼。',
            experiment: '🧪 极化群体实验：群体讨论后观点更加极端。',
            challenge: '如何弥合“睽”而走向“同人”？'
        }
    },
    'jian': {
        title: '蹇·艰难',
        tag: '阻尼振荡',
        chapter: '《易经》蹇卦',
        quote: '蹇，利西南，不利东北。利见大人，贞吉。',
        explain: '障碍物前阻力呈阻尼振荡，越急越难通过。',
        func: 'damped',
        defaultParam: 0.5,
        science: {
            field: '🚦 交通流 · 障碍通行能力',
            concept: '障碍物前车辆减速与加速交替，呈阻尼振荡，越急越堵。',
            experiment: '🧪 瓶颈通行实验：狭窄路口通行能力的振荡现象。',
            challenge: '为什么“急”反而不能“解蹇”？'
        }
    },
    'jie_solve': {
        title: '解·缓解',
        tag: '线性函数',
        chapter: '《易经》解卦',
        quote: '解，利西南。无所往，其来复吉。',
        explain: '应力释放呈线性卸载，张力解除即恢复。',
        func: 'linear',
        defaultParam: 1.0,
        science: {
            field: '🔧 弹性力学 · 卸载回弹',
            concept: '应力解除后材料沿线性路径回弹，如放下重物后弹簧恢复。',
            experiment: '🧪 弹簧卸载实验：撤去外力后弹簧匀速回弹。',
            challenge: '如何有效“解”开心结？'
        }
    },
    'sun': {
        title: '损·减损',
        tag: '对数函数',
        chapter: '《易经》损卦',
        quote: '损，有孚，元吉，无咎，可贞。',
        explain: '资源消耗呈对数递减，边际效用逐渐归零。',
        func: 'log',
        defaultParam: 0.8,
        science: {
            field: '📊 行为经济学 · 边际效用递减',
            concept: '资源消耗的边际效用递减，呈对数型下降。',
            experiment: '🧪 饱食后食物满足度测量：吃越多，额外满足感越少。',
            challenge: '何时“损”反而有益？'
        }
    },
    'yi_gain': {
        title: '益·增益',
        tag: '指数函数',
        chapter: '《易经》益卦',
        quote: '益，利有攸往，利涉大川。',
        explain: '知识复利呈指数增长，长期积累爆发惊人。',
        func: 'exp',
        defaultParam: 0.7,
        science: {
            field: '📚 教育经济学 · 知识复利',
            concept: '知识的指数增长（复利效应），长期积累爆发惊人。',
            experiment: '🧪 复利计算演示：年化20%增长，10年翻6倍。',
            challenge: '如何获得真正的“益”而不致“过”？'
        }
    },
    'guai': {
        title: '夬·决断',
        tag: '方波',
        chapter: '《易经》夬卦',
        quote: '夬，扬于王庭，孚号有厉。告自邑，不利即戎。',
        explain: '决策如方波，果断跳变，不拖泥带水。',
        func: 'square',
        defaultParam: 1.0,
        science: {
            field: '🧠 决策论 · 决断力',
            concept: '果断决策如方波般干脆，无中间状态。',
            experiment: '🧪 简单反应时实验：决策时间短则更果断。',
            challenge: '决断的“方波”与中庸的“正弦”哪个更优？'
        }
    },
    'gou': {
        title: '姤·相遇',
        tag: '高斯分布',
        chapter: '《易经》姤卦',
        quote: '姤，女壮，勿用取女。',
        explain: '随机相遇概率呈高斯分布，缘分是概率事件。',
        func: 'gaussian',
        defaultParam: 0.7,
        science: {
            field: '🎲 概率论 · 随机相遇概率',
            concept: '随机事件相遇概率符合高斯分布，缘分是概率事件。',
            experiment: '🧪 蒙特卡洛随机模拟：随机相遇的概率分布。',
            challenge: '相遇是偶然还是必然？'
        }
    },
    'cui': {
        title: '萃·聚集',
        tag: '收敛函数',
        chapter: '《易经》萃卦',
        quote: '萃，亨。王假有庙。',
        explain: '万有引力使物质聚集，收敛于质心。',
        func: 'converge',
        defaultParam: 1.0,
        science: {
            field: '🌌 引力物理 · 引力凝聚',
            concept: '引力使物质向质心聚集（收敛），形成星体。',
            experiment: '🧪 星云坍缩模拟：引力使气体云收缩聚集。',
            challenge: '为何“物以类聚”？'
        }
    },
    'sheng': {
        title: '升·上升',
        tag: '线性函数',
        chapter: '《易经》升卦',
        quote: '升，元亨。用见大人，勿恤。',
        explain: '垂直上升为匀速直线（理想），线性攀升。',
        func: 'linear',
        defaultParam: 1.0,
        science: {
            field: '⚡ 运动学 · 匀速直线运动',
            concept: '理想状态下的垂直上升为匀速直线运动。',
            experiment: '🧪 电梯上升测量：匀速段的位移-时间线性关系。',
            challenge: '上升期如何保持“线性”不失控？'
        }
    },
    'kun_trap': {
        title: '困·困境',
        tag: '阻尼振荡',
        chapter: '《易经》困卦',
        quote: '困，亨，贞。大人吉，无咎。',
        explain: '陷入泥潭时阻力如阻尼振荡，越挣扎陷越深。',
        func: 'damped',
        defaultParam: 0.5,
        science: {
            field: '🧪 土力学 · 流沙阻力',
            concept: '陷入流沙时挣扎加剧下沉，越急越深，需冷静应对。',
            experiment: '🧪 流沙陷落模拟：不同挣扎幅度与沉陷速度的关系。',
            challenge: '如何从“困”中找到“亨”？'
        }
    },
    'jing': {
        title: '井·井水',
        tag: 'S型生长曲线',
        chapter: '《易经》井卦',
        quote: '井，改邑不改井，无丧无得。往来井井。',
        explain: '水资源稳态补给呈S型增长，但井深有限。',
        func: 'sigmoid',
        defaultParam: 1.0,
        science: {
            field: '💧 水资源管理 · 地下水补给',
            concept: '地下水补给量随抽水深度变化呈S型，但总储量有限。',
            experiment: '🧪 水井抽水模拟：抽水速率与水位下降的关系。',
            challenge: '如何可持续“汲取”而不“枯竭”？'
        }
    },
    'ge': {
        title: '革·变革',
        tag: '方波',
        chapter: '《易经》革卦',
        quote: '革，己日乃孚。元亨利贞，悔亡。',
        explain: '革命如方波剧变，旧体系崩解新体系建立。',
        func: 'square',
        defaultParam: 1.0,
        science: {
            field: '📊 政治革命 · 制度突变',
            concept: '社会变革有时如方波般急剧，旧制度崩解新制度建立。',
            experiment: '🧪 历史周期率统计：朝代更替的爆发式变革。',
            challenge: '变革是渐进的“正弦”还是激进的“方波”？'
        }
    },
    'ding': {
        title: '鼎·鼎立',
        tag: '余弦周期',
        chapter: '《易经》鼎卦',
        quote: '鼎，元吉，亨。',
        explain: '结构稳定如三足鼎立，余弦相位平衡支撑。',
        func: 'cosine',
        defaultParam: 1.0,
        science: {
            field: '⚖️ 静力学 · 三力平衡汇交',
            concept: '三足鼎立时三力汇交于一点，系统平衡稳定。',
            experiment: '🧪 三角支架承重实验：三角结构承重远优于四边形。',
            challenge: '如何建立稳固的“鼎”局？'
        }
    },
    'zhen': {
        title: '震·雷霆',
        tag: '锯齿波',
        chapter: '《易经》震卦',
        quote: '震，亨。震来虩虩，笑言哑哑。',
        explain: '地震波呈锯齿状突袭，能量瞬间爆发。',
        func: 'sawtooth',
        defaultParam: 1.0,
        science: {
            field: '🌍 地震学 · 地震波传播',
            concept: '地震P波、S波传播时位移呈锯齿状突变。',
            experiment: '🧪 地震模拟振动台：地面运动的锯齿波记录。',
            challenge: '如何从“震”中学会敬畏？'
        }
    },
    'gen': {
        title: '艮·止',
        tag: '收敛函数',
        chapter: '《易经》艮卦',
        quote: '艮其背，不获其身。行其庭，不见其人。',
        explain: '静止是收敛的极限，速度为零时系统最稳定。',
        func: 'converge',
        defaultParam: 1.0,
        science: {
            field: '⚡ 运动学 · 静止与平衡',
            concept: '静止是收敛的极限状态，速度为零时系统最稳定。',
            experiment: '🧪 陀螺仪静止演示：静止陀螺比旋转时更稳定。',
            challenge: '为何“止”是最高级的“动”？'
        }
    },
    'jian_progress': {
        title: '渐·渐进',
        tag: '对数函数',
        chapter: '《易经》渐卦',
        quote: '渐，女归吉，利贞。',
        explain: '渐进演化呈对数式缓慢积累，厚积薄发。',
        func: 'log',
        defaultParam: 0.8,
        science: {
            field: '🧬 演化论 · 渐变论',
            concept: '物种演化多为对数式缓慢积累，再发生质变。',
            experiment: '🧪 达尔文雀喙测量：多代缓慢变化的累积效应。',
            challenge: '飞跃是否都来自“渐”的积累？'
        }
    },
    'guimei': {
        title: '归妹·结合',
        tag: 'S型生长曲线',
        chapter: '《易经》归妹卦',
        quote: '归妹，征凶，无攸利。',
        explain: '系统整合呈S型融合，不同模块协同共生。',
        func: 'sigmoid',
        defaultParam: 1.0,
        science: {
            field: '🧩 系统工程 · 系统集成',
            concept: '不同模块从独立到协同呈现S型融合，逐步实现协同共生。',
            experiment: '🧪 模块化组装测试：模块间接口的兼容性测试。',
            challenge: '结合是“强强联合”还是“互补共生”？'
        }
    },
    'feng': {
        title: '丰·丰盛',
        tag: '指数函数',
        chapter: '《易经》丰卦',
        quote: '丰，亨，王假之。勿忧，宜日中。',
        explain: '峰值呈指数顶，盛极必衰。',
        func: 'exp',
        defaultParam: 0.7,
        science: {
            field: '🌿 物候学 · 盛衰周期',
            concept: '生物生长高峰期呈指数型上升，但盛极之后必然衰退。',
            experiment: '🧪 向日葵花盘生长：花盘大小随时间呈指数增长后达峰值。',
            challenge: '如何延长“丰”的持续时间？'
        }
    },
    'lv_travel': {
        title: '旅·旅行',
        tag: '三角波',
        chapter: '《易经》旅卦',
        quote: '旅，小亨。旅贞吉。',
        explain: '旅途起伏如三角波，爬升与下降交替。',
        func: 'triangle',
        defaultParam: 1.0,
        science: {
            field: '🗺️ 地理学 · 海拔剖面',
            concept: '地形起伏如三角波，山峰与山谷交替出现。',
            experiment: '🧪 山地等高线测绘：地形剖面的三角波特征。',
            challenge: '人生的“旅行”追求山顶还是沿途？'
        }
    },
    'xun': {
        title: '巽·风行',
        tag: '正弦周期',
        chapter: '《易经》巽卦',
        quote: '巽，小亨。利有攸往，利见大人。',
        explain: '风场波动如正弦，气流传播能量。',
        func: 'sine',
        defaultParam: 1.0,
        science: {
            field: '🌬️ 气象学 · 大气波动',
            concept: '大气流动呈波动状，能量以正弦波形式传播。',
            experiment: '🧪 风洞烟雾实验：烟雾轨迹显示气流的波动特征。',
            challenge: '如何借“风”之力？'
        }
    },
    'dui': {
        title: '兑·悦',
        tag: '高斯分布',
        chapter: '《易经》兑卦',
        quote: '兑，亨，利贞。',
        explain: '幸福感呈高斯钟形，中等水平最普遍。',
        func: 'gaussian',
        defaultParam: 0.7,
        science: {
            field: '😊 积极心理学 · 幸福感分布',
            concept: '主观幸福感在人群中呈高斯分布，中等幸福感最多见。',
            experiment: '🧪 主观幸福感调查：全球幸福感分布的高斯特征。',
            challenge: '快乐是常态还是稀缺？'
        }
    },
    'huan': {
        title: '涣·涣散',
        tag: '指数函数',
        chapter: '《易经》涣卦',
        quote: '涣，亨。王假有庙。',
        explain: '扩散过程呈指数衰减，浓度梯度驱散分子。',
        func: 'exp',
        defaultParam: 0.6,
        science: {
            field: '🧪 物理化学 · 菲克扩散定律',
            concept: '物质扩散时浓度随时间呈指数衰减，从高浓度向低浓度扩散。',
            experiment: '🧪 墨水滴入清水扩散：墨水的逐渐弥散过程。',
            challenge: '如何从“涣”中重建秩序？'
        }
    },
    'jie_control': {
        title: '节·节制',
        tag: '收敛函数',
        chapter: '《易经》节卦',
        quote: '节，亨。苦节不可贞。',
        explain: '资源消耗呈收敛式节制，过度节制也会痛苦。',
        func: 'converge',
        defaultParam: 0.8,
        science: {
            field: '⚡ 能源管理 · 节能阈值',
            concept: '资源使用有最优范围，过度节制也会导致系统失衡。',
            experiment: '🧪 限电实验模拟：供电量低于阈值时系统失稳。',
            challenge: '“节”的度在哪里？'
        }
    },
    'zhongfu': {
        title: '中孚·信',
        tag: 'S型生长曲线',
        chapter: '《易经》中孚卦',
        quote: '中孚，豚鱼吉。利涉大川，利贞。',
        explain: '信任建立呈S型上升，崩塌却呈指数下降。',
        func: 'sigmoid',
        defaultParam: 1.0,
        science: {
            field: '🤝 社会信任 · 信任动力学',
            concept: '信任建立缓慢（S型），但一次失信可导致指数级崩塌。',
            experiment: '🧪 信任博弈实验：信任建立与摧毁的速度对比。',
            challenge: '为何信任建立难而摧毁易？'
        }
    },
    'xiaoguo_minor': {
        title: '小过·小过',
        tag: '二次函数（U型）',
        chapter: '《易经》小过卦',
        quote: '小过，亨，利贞。可小事，不可大事。',
        explain: '微小偏差呈二次方累积，小过酿大祸。',
        func: 'quadratic',
        defaultParam: 1.0,
        science: {
            field: '📐 误差理论 · 误差累积',
            concept: '微小误差随时间二次方累积（蝴蝶效应），小过可能酿成大祸。',
            experiment: '🧪 多米诺骨牌实验：微小偏移导致连锁倒塌。',
            challenge: '如何容忍“小过”而不致“大错”？'
        }
    },
    'jiji': {
        title: '既济·事成',
        tag: '锯齿波',
        chapter: '《易经》既济卦',
        quote: '既济，亨小，利贞。初吉，终乱。',
        explain: '锯齿波阶梯上升后骤然跌落，对应种群爆发后崩溃。',
        func: 'sawtooth',
        defaultParam: 1.0,
        science: {
            field: '🧬 系统生物学 · 种群崩溃',
            concept: '资源耗竭导致种群数量锯齿状骤降，初吉终乱。',
            experiment: '🧪 旅鼠数量波动模拟：种群爆发与崩溃的周期性波动。',
            challenge: '如何引入天敌将锯齿波调控为阻尼振荡？'
        }
    },
    'weiji': {
        title: '未济·未成',
        tag: '三角波',
        chapter: '《易经》未济卦',
        quote: '未济，亨。小狐汔济，濡其尾，无攸利。',
        explain: '三角波尚未完成即转向，奋斗永无止境。',
        func: 'triangle',
        defaultParam: 1.0,
        science: {
            field: '🌀 哲学 · 永恒生成',
            concept: '未完成是生命的常态（过程哲学），如同三角波永无终结。',
            experiment: '🧪 过程哲学模拟：永无止境的生成与变化。',
            challenge: '未完成是否才是生命的常态？'
        }
    }
};

// ============================================================
//  注：以上为易经64卦完整数据
//  所有卦象均已匹配对应的波形函数与跨学科科学映射。
// ============================================================
