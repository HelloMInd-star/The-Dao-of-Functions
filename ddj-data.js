// ============================================================
//  📦 道德经 · 数据仓库 (ddj-data.js) — 奥数升级版
// ============================================================
const DDJ_DATA = {
    'shouxin': {
        title: '收心 · 致虚极',
        tag: '收敛函数',
        chapter: '《道德经 · 第十六章》',
        quote: '致虚极，守静笃。万物并作，吾以观复。',
        explain: '把向外攀援的思绪收回来，像 y=1/x 无限趋近原点，回归生命的本初宁静。',
        func: 'converge',
        defaultParam: 1.0,
        // ===== 🧮 奥数模块（新增） =====
        olympiad: {
            title: '🧮 奥数 · 收敛函数精进',
            domain: 'x ∈ (-∞, 0) ∪ (0, +∞)',
            range: 'y ∈ (-∞, 0) ∪ (0, +∞)',
            symmetry: '奇函数（关于原点对称），图像在一、三象限',
            monotonicity: '在 (-∞, 0) 和 (0, +∞) 上分别单调递减',
            asymptote: 'x轴 (y=0) 和 y轴 (x=0) 为渐近线',
            challenge: '💡 奥数挑战：若参数 k 从 1 变为 3，曲线 y = k/x 与直线 y = -x + b 恰好有一个公共点，求 b 的取值范围。'
        }
    },
    'ziran': {
        title: '自然 · 道法自然',
        tag: '线性函数',
        chapter: '《道德经 · 第二十五章》',
        quote: '人法地，地法天，天法道，道法自然。',
        explain: '线性 y=x，不偏不倚。你如何对待世界，世界便如何回馈于你，此乃天然之道。',
        func: 'linear',
        defaultParam: 1.0,
        olympiad: {
            title: '🧮 奥数 · 线性函数精进',
            domain: 'x ∈ (-∞, +∞)',
            range: 'y ∈ (-∞, +∞)',
            symmetry: '奇函数（关于原点对称）',
            monotonicity: '当 k>0 时单调递增，k<0 时单调递减',
            asymptote: '无渐近线',
            challenge: '💡 奥数挑战：若 y = kx 与 y = -x + 4 在 x∈[1, 3] 上有交点，求整数 k 的个数。'
        }
    },
    'jilei': {
        title: '积累 · 厚积薄发',
        tag: '指数函数',
        chapter: '《道德经 · 第六十四章》',
        quote: '合抱之木，生于毫末；九层之台，起于累土。',
        explain: '指数 eˣ 的爆发力：前期微不可察，后期势如破竹。行善与进德，终将跨越临界点。',
        func: 'exp',
        defaultParam: 1.0,
        olympiad: {
            title: '🧮 奥数 · 指数函数精进',
            domain: 'x ∈ (-∞, +∞)',
            range: 'y ∈ (0, +∞)',
            symmetry: '非奇非偶',
            monotonicity: '在 R 上单调递增（底数 e>1）',
            asymptote: 'x轴 (y=0) 为水平渐近线',
            challenge: '💡 奥数挑战：已知 e^x ≥ x + 1 恒成立（切线不等式）。若 e^{ax} ≥ 2x 对 x>0 恒成立，求 a 的最小值。'
        }
    },
    'weidao': {
        title: '为道 · 日损',
        tag: '对数函数',
        chapter: '《道德经 · 第四十八章》',
        quote: '为学日益，为道日损，损之又损，以至于无为。',
        explain: '对数 ln x 先快后慢。学问越做越多，大道越修越简，最终无限趋近那个“一”。',
        func: 'log',
        defaultParam: 1.0,
        olympiad: {
            title: '🧮 奥数 · 对数函数精进',
            domain: 'x ∈ (0, +∞)',
            range: 'y ∈ (-∞, +∞)',
            symmetry: '非奇非偶',
            monotonicity: '在 (0, +∞) 上单调递增',
            asymptote: 'y轴 (x=0) 为垂直渐近线',
            challenge: '💡 奥数挑战：解关于 x 的不等式 log₂(x² - 3x) < 2，并联系“为道日损”谈谈解的区间与“减法”的关系。'
        }
    }
    // ---------- ✏️ 后续追加的章节，也请按此格式加上 olympiad 字段 ----------
};
