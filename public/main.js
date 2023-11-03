// 全良リスト
const result = [
	{ "date": "2023/11/02", "title": "ゲラゲラポーのうた", "diff": "★7", "genre": "キッズ" },
	{ "date": "2023/11/02", "title": "誘惑", "diff": "★7", "genre": "ポップス" },
	{ "date": "2023/11/02", "title": "フリフリ♪ノリノリ♪", "diff": "★7", "genre": "ナムコオリジナル" },
	{ "date": "2023/11/02", "title": "願いはエスペラント", "diff": "★7", "genre": "ナムコオリジナル" },
	{ "date": "2023/11/02", "title": "ラブリーX", "diff": "★7", "genre": "ナムコオリジナル" },
	{ "date": "2023/11/02", "title": "それが大事", "diff": "★7", "genre": "ポップス" },
	{ "date": "2023/11/02", "title": "オフ♨ロック", "diff": "★7", "genre": "ナムコオリジナル" },
	{ "date": "2023/11/02", "title": "ねぇ教えて", "diff": "★7", "genre": "ナムコオリジナル" },
	{ "date": "2023/11/02", "title": "無慈悲な王", "diff": "★7", "genre": "ゲームミュージック" },
	{ "date": "2023/11/02", "title": "RHYTHM CONNECT", "diff": "★8", "genre": "ナムコオリジナル" },
	{ "date": "2023/10/27", "title": "カ！カ！カ！カミズモード！", "diff": "★7", "genre": "キッズ" },
	{ "date": "2023/10/27", "title": "SORA-Ⅱ グリーゼ581", "diff": "★7", "genre": "ナムコオリジナル" },
	{ "date": "2023/10/27", "title": "ツバサグラビティ", "diff": "★7", "genre": "ゲームミュージック" },
	{ "date": "2023/10/27", "title": "スクロール・ミカ", "diff": "★7", "genre": "ナムコオリジナル" },
	{ "date": "2023/10/27", "title": "PONPOKO RHYTHM", "diff": "★7", "genre": "ナムコオリジナル" },
	{ "date": "2023/10/27", "title": "どんちゃん世界旅行", "diff": "★7", "genre": "ナムコオリジナル" },
	{ "date": "2023/10/27", "title": "テルミービート", "diff": "★8", "genre": "ボーカロイド" },
	{ "date": "2023/10/26", "title": "Many wow bang!", "diff": "★7", "genre": "ナムコオリジナル" },
	{ "date": "2023/10/26", "title": "GO MY WAY!!", "diff": "★7", "genre": "ゲームミュージック" },
	{ "date": "2023/10/23", "title": "六兆年と一夜物語", "diff": "★9", "genre": "ボーカロイド" },
	{ "date": "2023/10/23", "title": "六兆年と一夜物語（裏）", "diff": "★9", "genre": "ボーカロイド" },
	{ "date": "2023/10/23", "title": "忍者は最高", "diff": "★7", "genre": "ナムコオリジナル" },
	{ "date": "2023/10/23", "title": "Fly away", "diff": "★7", "genre": "ナムコオリジナル" },
	{ "date": "2023/10/23", "title": "TO MAKE THE END OF BATTLE", "diff": "★7", "genre": "ゲームミュージック" },
	{ "date": "2023/10/22", "title": "スプラトゥーン2 メドレー", "diff": "★7", "genre": "ゲームミュージック" },
	{ "date": "2023/10/22", "title": "Angelic Angel", "diff": "★7", "genre": "アニメ" },
	{ "date": "2023/10/19", "title": "1・2・さんしのでドンドカッカッ！", "diff": "★7", "genre": "ナムコオリジナル" },
	{ "date": "2023/10/19", "title": "ウルトラマンX", "diff": "★7", "genre": "アニメ" },
	{ "date": "2023/10/18", "title": "どんちゃんしたい！", "diff": "★8", "genre": "ボーカロイド" },
	{ "date": "2023/10/18", "title": "スカーレット警察のゲットーパトロール24時", "diff": "★8", "genre": "バラエティ" },
	{ "date": "2023/10/18", "title": "Never say never", "diff": "★7", "genre": "ゲームミュージック" },
	{ "date": "2023/10/18", "title": "駄々っ子モンスター", "diff": "★7", "genre": "ナムコオリジナル" },
	{ "date": "2023/10/18", "title": "twinkle night (feat. somunia)", "diff": "★7", "genre": "バラエティ" },
	{ "date": "2023/10/18", "title": "アイドル狂戦士(feat.佐藤貴文)", "diff": "★7", "genre": "バラエティ" },
	{ "date": "2023/10/18", "title": "Crush (Prod. SHOW)", "diff": "★7", "genre": "バラエティ" },
	{ "date": "2023/10/18", "title": "強風オールバック(feat.歌愛ユキ)", "diff": "★7", "genre": "ボーカロイド" },
	{ "date": "2023/10/18", "title": "逆戦 NI ZHAN", "diff": "★7", "genre": "ポップス" },
	{ "date": "2023/10/18", "title": "第ゼロ感", "diff": "★7", "genre": "アニメ" },
	{ "date": "2023/10/08", "title": "Sugar", "diff": "★7", "genre": "ポップス" },
	{ "date": "2023/10/07", "title": "Destr0yer", "diff": "★7", "genre": "バラエティ" },
	{ "date": "2023/10/03", "title": "エンジェル ドリーム", "diff": "★8", "genre": "ゲームミュージック" },
	{ "date": "2023/10/03", "title": "あんずのうた", "diff": "★7", "genre": "ゲームミュージック" },
	{ "date": "2023/09/26", "title": "拝啓、学校にて・・・", "diff": "★7", "genre": "ナムコオリジナル" },
	{ "date": "2023/09/22", "title": "Hello, Worldooon!!", "diff": "★7", "genre": "ナムコオリジナル" },
	{ "date": "2023/09/22", "title": "ユウガオノキミ", "diff": "★7", "genre": "ナムコオリジナル" },
	{ "date": "2023/09/22", "title": "Aloft in the wind", "diff": "★7", "genre": "ナムコオリジナル" },
	{ "date": "2023/09/22", "title": "ワンダーモモーイ", "diff": "★7", "genre": "ゲームミュージック" },
	{ "date": "2023/09/22", "title": "希望へのメロディー", "diff": "★7", "genre": "ナムコオリジナル" },
	{ "date": "2023/09/22", "title": "ソードバトラーズ", "diff": "★7", "genre": "ナムコオリジナル" },
	{ "date": "2023/09/22", "title": "ソラのミチシルベ", "diff": "★7", "genre": "ゲームミュージック" },
	{ "date": "2023/09/22", "title": "Highschool love!", "diff": "★7", "genre": "ゲームミュージック" },
	{ "date": "2023/09/22", "title": "夏祭り / ジッタリン・ジン", "diff": "★7", "genre": "ポップス" },
	{ "date": "2023/09/22", "title": "IAM (feat. Shogo, Tsubasa)", "diff": "★7", "genre": "バラエティ" },
	{ "date": "2023/09/22", "title": "Grip & Break down !! -達人Edit.-", "diff": "★7", "genre": "バラエティ" },
	{ "date": "2023/09/22", "title": "ペンパイナッポーアッポーペン（PPAP）", "diff": "★7", "genre": "ポップス" },
	{ "date": "2023/09/22", "title": "おさかな毎日！さかなクン", "diff": "★7", "genre": "ポップス" },
	{ "date": "2023/09/22", "title": "ラッスンゴレライ", "diff": "★7", "genre": "ポップス" },
	{ "date": "2023/09/22", "title": "Emma", "diff": "★7", "genre": "ナムコオリジナル" },
	{ "date": "2023/09/22", "title": "共奏鼓祭", "diff": "★8", "genre": "ナムコオリジナル" },
	{ "date": "2023/09/22", "title": "Rat A Tat!!!（裏）", "diff": "★9", "genre": "ゲームミュージック" },
	{ "date": "2023/09/22", "title": "絆ノ奇跡（裏）", "diff": "★9", "genre": "アニメ" },
	{ "date": "2023/09/22", "title": "うまぴょい伝説", "diff": "★7", "genre": "アニメ" },
	{ "date": "2023/09/21", "title": "絆ノ奇跡", "diff": "★5", "genre": "アニメ" },
	{ "date": "2023/09/21", "title": "Love You", "diff": "★6", "genre": "ポップス" },
	{ "date": "2023/09/21", "title": "ちゅ、多様性。", "diff": "★8", "genre": "ポップス" },
	{ "date": "2023/09/20", "title": "Hope", "diff": "★7", "genre": "アニメ" },
	{ "date": "2023/09/20", "title": "魔法をかけて！", "diff": "★7", "genre": "ゲームミュージック" },
	{ "date": "2023/09/20", "title": "オーバード", "diff": "★7", "genre": "ポップス" },
	{ "date": "2023/09/19", "title": "恋の処方箋", "diff": "★7", "genre": "ナムコオリジナル" },
	{ "date": "2023/09/17", "title": "Rat A Tat!!!", "diff": "★5", "genre": "ゲームミュージック" },
	{ "date": "2023/09/15", "title": "白猫きゃらめる夢幻のわたあめ", "diff": "★7", "genre": "ナムコオリジナル" },
	{ "date": "2023/09/15", "title": "God knows...", "diff": "★7", "genre": "アニメ" },
	{ "date": "2023/09/04", "title": "風雲！バチお先生", "diff": "★7", "genre": "ナムコオリジナル" },
	{ "date": "2023/08/18", "title": "想いを手に願いを込めて", "diff": "★7", "genre": "ナムコオリジナル" },
	{ "date": "2023/08/18", "title": "いぬのおまわりさん", "diff": "★7", "genre": "キッズ" },
	{ "date": "2023/08/18", "title": "怪獣少女は火を吹かない", "diff": "★8", "genre": "ボーカロイド" },
	{ "date": "2023/08/18", "title": "乱数調整のリバースシンデレラ", "diff": "★8", "genre": "ポップス" },
	{ "date": "2023/08/18", "title": "さよならエレジー", "diff": "★8", "genre": "ポップス" },
	{ "date": "2023/08/18", "title": "なにやってもうまくいかない", "diff": "★8", "genre": "ポップス" },
	{ "date": "2023/08/11", "title": "Phoenix", "diff": "★7", "genre": "ナムコオリジナル" },
	{ "date": "2023/08/11", "title": "ソウルキャリバーⅡ", "diff": "★7", "genre": "ゲームミュージック" },
	{ "date": "2023/08/11", "title": "地平線のエオリア", "diff": "★7", "genre": "ナムコオリジナル" },
	{ "date": "2023/08/11", "title": "3Q-4U-AC00", "diff": "★7", "genre": "ナムコオリジナル" },
	{ "date": "2023/08/11", "title": "プロミスザスター（裏）", "diff": "★8", "genre": "ポップス" },
	{ "date": "2023/08/11", "title": "アバみ", "diff": "★8", "genre": "ポップス" },
	{ "date": "2023/08/11", "title": "JOIN US", "diff": "★7", "genre": "ポップス" },
	{ "date": "2023/08/11", "title": "ねねねねねねねね!大爆走", "diff": "★7", "genre": "ポップス" },
	{ "date": "2023/08/11", "title": "Smile & Go!!", "diff": "★7", "genre": "ポップス" },
	{ "date": "2023/08/11", "title": "だから僕は音楽を辞めた（裏）", "diff": "★8", "genre": "ポップス" },
	{ "date": "2023/08/11", "title": "ゴッドソング", "diff": "★8", "genre": "ポップス" },
	{ "date": "2023/08/11", "title": "Jun Bride", "diff": "★7", "genre": "ポップス" },
	{ "date": "2023/08/11", "title": "ミュートすればいいじゃん。", "diff": "★7", "genre": "ポップス" },
	{ "date": "2023/08/11", "title": "カウントダウン", "diff": "★8", "genre": "アニメ" },
	{ "date": "2023/08/11", "title": "世界はあなたに笑いかけている", "diff": "★8", "genre": "ポップス" },
	{ "date": "2023/08/11", "title": "DANCE MONKEY", "diff": "★7", "genre": "ポップス" },
	{ "date": "2023/08/11", "title": "bad guy", "diff": "★7", "genre": "ポップス" },
	{ "date": "2023/08/11", "title": "オドループ", "diff": "★8", "genre": "ポップス" },
	{ "date": "2023/08/11", "title": "YONA YONA DANCE", "diff": "★8", "genre": "ポップス" },
	{ "date": "2023/08/11", "title": "廻廻奇譚", "diff": "★8", "genre": "アニメ" },
	{ "date": "2023/08/11", "title": "なんどでも笑おう", "diff": "★7", "genre": "ゲームミュージック" },
	{ "date": "2023/08/11", "title": "Streamer", "diff": "★7", "genre": "ポップス" },
	{ "date": "2023/08/11", "title": "第六感", "diff": "★7", "genre": "ポップス" },
	{ "date": "2023/08/10", "title": "戦国三弦", "diff": "★9", "genre": "ナムコオリジナル" },
	{ "date": "2023/08/10", "title": "ヘイ,ミスタープロフェッサー", "diff": "★7", "genre": "ナムコオリジナル" },
	{ "date": "2023/08/10", "title": "伝説の祭り", "diff": "★7", "genre": "ナムコオリジナル" },
	{ "date": "2023/08/10", "title": "Mulberry", "diff": "★7", "genre": "ナムコオリジナル" },
	{ "date": "2023/08/10", "title": "dance storm", "diff": "★7", "genre": "ナムコオリジナル" },
	{ "date": "2023/08/10", "title": "綻放（裏）", "diff": "★8", "genre": "ナムコオリジナル" },
	{ "date": "2023/08/10", "title": "蛻変（裏）", "diff": "★8", "genre": "ナムコオリジナル" },
	{ "date": "2023/08/10", "title": "春遊（裏）", "diff": "★8", "genre": "ナムコオリジナル" },
	{ "date": "2023/08/10", "title": "曙光（裏）", "diff": "★8", "genre": "ナムコオリジナル" },
	{ "date": "2023/08/10", "title": "蓄勢（裏）", "diff": "★8", "genre": "ナムコオリジナル" },
	{ "date": "2023/08/10", "title": "季曲（裏）", "diff": "★8", "genre": "ナムコオリジナル" },
	{ "date": "2023/08/10", "title": "蛻変", "diff": "★7", "genre": "ナムコオリジナル" },
	{ "date": "2023/08/10", "title": "蝶戀", "diff": "★7", "genre": "ナムコオリジナル" },
	{ "date": "2023/08/10", "title": "蓄勢", "diff": "★7", "genre": "ナムコオリジナル" },
	{ "date": "2023/08/10", "title": "CITRUS", "diff": "★7", "genre": "ポップス" },
	{ "date": "2023/08/09", "title": "以後別做朋友 The Distance of Love", "diff": "★6", "genre": "ポップス" },
	{ "date": "2023/08/09", "title": "天国と地獄 序曲", "diff": "★6", "genre": "クラシック" },
	{ "date": "2023/08/09", "title": "M@STERPIECE", "diff": "★6", "genre": "ゲームミュージック" },
	{ "date": "2023/08/09", "title": "キミとボクのミライ", "diff": "★6", "genre": "ゲームミュージック" },
	{ "date": "2023/08/09", "title": "ドラゴンボールヒーローズ ギャラクシーミッションシリーズ テーマソング", "diff": "★6", "genre": "ゲームミュージック" },
	{ "date": "2023/08/09", "title": "ドラゴンボールヒーローズ 邪悪龍ミッションシリーズ テーマソング", "diff": "★6", "genre": "ゲームミュージック" },
	{ "date": "2023/08/09", "title": "ミツボシ☆☆★", "diff": "★6", "genre": "ゲームミュージック" },
	{ "date": "2023/08/09", "title": "きゅんっ！ヴァンパイアガール", "diff": "★6", "genre": "ゲームミュージック" },
	{ "date": "2023/08/08", "title": "TOKIMEKIエスカレート", "diff": "★6", "genre": "ゲームミュージック" },
	{ "date": "2023/08/08", "title": "スーパードラゴンボールヒーローズ　テーマソング", "diff": "★6", "genre": "ゲームミュージック" },
	{ "date": "2023/08/08", "title": "くらえ！ブットバースト!!", "diff": "★6", "genre": "ゲームミュージック" },
	{ "date": "2023/08/08", "title": "NeGa/PoSi*ラブ/コール", "diff": "★6", "genre": "バラエティ" },
	{ "date": "2023/08/08", "title": "Reason!!", "diff": "★6", "genre": "ゲームミュージック" },
	{ "date": "2023/08/08", "title": "君をのせて", "diff": "★6", "genre": "キッズ" },
	{ "date": "2023/08/08", "title": "Savage Love", "diff": "★6", "genre": "ポップス" },
	{ "date": "2023/08/08", "title": "六本の薔薇と采の歌", "diff": "★6", "genre": "ナムコオリジナル" },
	{ "date": "2023/08/08", "title": "人のお金で焼肉を食したい！", "diff": "★7", "genre": "ナムコオリジナル" },
	{ "date": "2023/08/08", "title": "DDU-DU DDU-DU", "diff": "★7", "genre": "ポップス" },
	{ "date": "2023/08/03", "title": "Habit（裏）", "diff": "★8", "genre": "ポップス" },
	{ "date": "2023/08/03", "title": "Habit", "diff": "★7", "genre": "ポップス" },
	{ "date": "2023/08/03", "title": "恋ゲバ", "diff": "★7", "genre": "ポップス" },
	{ "date": "2023/08/03", "title": "わたしの一番かわいいところ", "diff": "★7", "genre": "ポップス" },
	{ "date": "2023/08/03", "title": "秒針を噛む", "diff": "★8", "genre": "ポップス" },
	{ "date": "2023/07/31", "title": "Back to Life", "diff": "★6", "genre": "ゲームミュージック" },
	{ "date": "2023/07/31", "title": "Surges", "diff": "★8", "genre": "ポップス" },
	{ "date": "2023/07/31", "title": "ドキメキダイアリー", "diff": "★6", "genre": "キッズ" },
	{ "date": "2023/07/31", "title": "酔いどれ知らず", "diff": "★8", "genre": "ボーカロイド" },
	{ "date": "2023/07/27", "title": "アイドル", "diff": "★7", "genre": "ポップス" },

	{ "date": "2023/07/24", "title": "おばけのお仕事", "diff": "★6", "genre": "ナムコオリジナル" },
	{ "date": "2023/07/24", "title": "虹色・夢色・太鼓色", "diff": "★6", "genre": "ナムコオリジナル" },
	{ "date": "2023/07/24", "title": "ドドドドドンだフル！", "diff": "★5", "genre": "ナムコオリジナル" },
	{ "date": "2023/07/22", "title": "ドラゴンスピリットメドレー", "diff": "★7", "genre": "ゲームミュージック" },
	{ "date": "2023/07/22", "title": "綻放", "diff": "★7", "genre": "ナムコオリジナル" },
	{ "date": "2023/07/22", "title": "花漾", "diff": "★7", "genre": "ナムコオリジナル" },
	{ "date": "2023/07/22", "title": "春遊", "diff": "★7", "genre": "ナムコオリジナル" },
	{ "date": "2023/07/18", "title": "ハルジオン", "diff": "★8", "genre": "ポップス" },
	{ "date": "2023/07/18", "title": "ホロメン音頭", "diff": "★6", "genre": "ポップス" },
	{ "date": "2023/07/18", "title": "私以外私じゃないの", "diff": "★8", "genre": "ポップス" },
	{ "date": "2023/07/18", "title": "にんじゃりばんばん", "diff": "★8", "genre": "ポップス" },
	{ "date": "2023/07/18", "title": "STAY TUNE", "diff": "★7", "genre": "ポップス" },
	{ "date": "2023/07/18", "title": "ごめんなさいのKissing You", "diff": "★7", "genre": "ポップス" },
	{ "date": "2023/07/18", "title": "スキスキ星人", "diff": "★6", "genre": "ポップス" },
	{ "date": "2023/07/18", "title": "AWAY", "diff": "★6", "genre": "ポップス" },
	{ "date": "2023/07/18", "title": "ドライフラワー", "diff": "★7", "genre": "ポップス" },
	{ "date": "2023/07/17", "title": "時を待とう", "diff": "★6", "genre": "キッズ" },
	{ "date": "2023/07/17", "title": "おおブレネリ", "diff": "★6", "genre": "クラシック" },
	{ "date": "2023/07/17", "title": "RESTART", "diff": "★8", "genre": "ポップス" },
	{ "date": "2023/07/17", "title": "シンクロニシティ", "diff": "★7", "genre": "ポップス" },
	{ "date": "2023/07/16", "title": "僕らは今のなかで", "diff": "★8", "genre": "アニメ" },
	{ "date": "2023/07/16", "title": "宇宙SAMURAI", "diff": "★8", "genre": "ナムコオリジナル" },
	{ "date": "2023/07/16", "title": "やわらか戦車", "diff": "★6", "genre": "アニメ" },
	{ "date": "2023/07/16", "title": "8月の坂", "diff": "★7", "genre": "ポップス" },
	{ "date": "2023/07/16", "title": "零 -ZERO-", "diff": "★7", "genre": "キッズ" },
	{ "date": "2023/07/16", "title": "女々しくて", "diff": "★8", "genre": "ポップス" },
	{ "date": "2023/07/16", "title": "HOWEVER", "diff": "★6", "genre": "ポップス" },
	{ "date": "2023/07/16", "title": "友情ぽっぷ", "diff": "★6", "genre": "ナムコオリジナル" },
	{ "date": "2023/07/16", "title": "My Mine", "diff": "★6", "genre": "ナムコオリジナル" },
	{ "date": "2023/07/16", "title": "睡蓮花", "diff": "★7", "genre": "ポップス" },
	{ "date": "2023/07/16", "title": "白日", "diff": "★8", "genre": "ポップス" },
	{ "date": "2023/07/16", "title": "くらべられっ子", "diff": "★7", "genre": "ポップス" },
	{ "date": "2023/07/15", "title": "見たこともない景色", "diff": "★6", "genre": "ポップス" },
	{ "date": "2023/07/15", "title": "亡き王女のためのパヴァーヌ", "diff": "★6", "genre": "クラシック" },
	{ "date": "2023/07/15", "title": "ハロー！どんちゃん", "diff": "★6", "genre": "ナムコオリジナル" },
	{ "date": "2023/07/15", "title": "Star!!", "diff": "★6", "genre": "ゲームミュージック" },
	{ "date": "2023/07/15", "title": "Tulip", "diff": "★6", "genre": "ゲームミュージック" },
	{ "date": "2023/07/15", "title": "Circle of Seasons", "diff": "★6", "genre": "アニメ" },
	{ "date": "2023/07/15", "title": "ナツモノ☆", "diff": "★6", "genre": "ナムコオリジナル" },
	{ "date": "2023/07/15", "title": "Growing Up", "diff": "★6", "genre": "ナムコオリジナル" },
	{ "date": "2023/07/15", "title": "マーブルハート", "diff": "★6", "genre": "ナムコオリジナル" },
	{ "date": "2023/07/14", "title": "喫茶レイン", "diff": "★6", "genre": "ナムコオリジナル" },
	{ "date": "2023/07/14", "title": "ルカルカ★ナイトフィーバー", "diff": "★8", "genre": "ボーカロイド" },
	{ "date": "2023/07/12", "title": "Shine!!", "diff": "★6", "genre": "ゲームミュージック" },
	{ "date": "2023/07/12", "title": "GOIN'!!!", "diff": "★6", "genre": "ゲームミュージック" },
	{ "date": "2023/07/12", "title": "鏡の国のアリス", "diff": "★6", "genre": "ナムコオリジナル" },
	{ "date": "2023/07/12", "title": "ナンセンス文学", "diff": "★7", "genre": "ポップス" },
	{ "date": "2023/07/12", "title": "エイリアンエイリアン", "diff": "★9", "genre": "ボーカロイド" },
	{ "date": "2023/07/12", "title": "ロキ", "diff": "★7", "genre": "ポップス" },
	{ "date": "2023/07/12", "title": "雨とペトラ（裏）", "diff": "★8", "genre": "ボーカロイド" },
	{ "date": "2023/07/12", "title": "ヒバナ", "diff": "★8", "genre": "ボーカロイド" },
	{ "date": "2023/07/12", "title": "ヴァンパイア", "diff": "★8", "genre": "ボーカロイド" },
	{ "date": "2023/07/11", "title": "激運！七福ハッピークルー", "diff": "★9", "genre": "ナムコオリジナル" },
	{ "date": "2023/07/11", "title": "迅風丸", "diff": "★8", "genre": "ナムコオリジナル" },
	{ "date": "2023/07/11", "title": "エビカニクス", "diff": "★6", "genre": "キッズ" },
	{ "date": "2023/07/11", "title": "ドキドキ恋の予感！？", "diff": "★7", "genre": "ボーカロイド" },
	{ "date": "2023/07/10", "title": "M.S.S.Planet", "diff": "★8", "genre": "ボーカロイド" },
	{ "date": "2023/07/10", "title": "レトロマニア狂想曲", "diff": "★8", "genre": "ボーカロイド" },
	{ "date": "2023/07/10", "title": "残響", "diff": "★6", "genre": "ボーカロイド" },
	{ "date": "2023/07/10", "title": "ハイスペックニート", "diff": "★8", "genre": "ボーカロイド" },
	{ "date": "2023/07/06", "title": "ALiVE", "diff": "★9", "genre": "バラエティ" },
	{ "date": "2023/07/06", "title": "Scars of FAUNA", "diff": "★9", "genre": "ゲームミュージック" },
	{ "date": "2023/07/04", "title": "ロボットロケンロー☆", "diff": "★6", "genre": "ナムコオリジナル" },
	{ "date": "2023/07/04", "title": "修錬愛情 Practice Love", "diff": "★7", "genre": "ポップス" },
	{ "date": "2023/07/04", "title": "群青", "diff": "★8", "genre": "ポップス" },
	{ "date": "2023/07/04", "title": "命短し恋せよ乙女", "diff": "★7", "genre": "ポップス" },
	{ "date": "2023/07/04", "title": "DREAMERS' PARADISE DANCE EARTH PARTY", "diff": "★7", "genre": "ポップス" },
	{ "date": "2023/07/04", "title": "さちさちにしてあげる♪", "diff": "★7", "genre": "ポップス" },
	{ "date": "2023/07/04", "title": "I my moko", "diff": "★8", "genre": "ポップス" },
	{ "date": "2023/07/04", "title": "恋するフォーチュンクッキー", "diff": "★7", "genre": "ポップス" },
	{ "date": "2023/07/04", "title": "ストロベリー☆プラネット！", "diff": "★6", "genre": "ポップス" },
	{ "date": "2023/07/04", "title": "紅蓮華（裏）", "diff": "★8", "genre": "アニメ" },
	{ "date": "2023/07/03", "title": "乙女解剖（裏）", "diff": "★8", "genre": "ボーカロイド" },
	{ "date": "2023/07/03", "title": "Red Rose Evangel", "diff": "★9", "genre": "ナムコオリジナル" },
	{ "date": "2023/07/03", "title": "White Rose Insanity（裏）", "diff": "★8", "genre": "ナムコオリジナル" },
	{ "date": "2023/07/03", "title": "White Rose Insanity", "diff": "★7", "genre": "ナムコオリジナル" },
	{ "date": "2023/07/02", "title": "千本桜", "diff": "★7", "genre": "ボーカロイド" },
	{ "date": "2023/07/02", "title": "カンタービレ×パッシオーネ", "diff": "★7", "genre": "ボーカロイド" },
	{ "date": "2023/07/01", "title": "シャルル", "diff": "★8", "genre": "ボーカロイド" },
	{ "date": "2023/07/01", "title": "シンデレラ", "diff": "★7", "genre": "ボーカロイド" },
	{ "date": "2023/07/01", "title": "神っぽいな", "diff": "★7", "genre": "ボーカロイド" },
	{ "date": "2023/07/01", "title": "ダーリンダンス", "diff": "★8", "genre": "ボーカロイド" },
	{ "date": "2023/07/01", "title": "だれかの心臓になれたなら", "diff": "★8", "genre": "ボーカロイド" },
	{ "date": "2023/07/01", "title": "+♂(プラス男子)", "diff": "★7", "genre": "ボーカロイド" },
	{ "date": "2023/07/01", "title": "いろはすてっぷ！", "diff": "★7", "genre": "ポップス" },
	{ "date": "2023/06/30", "title": "チューリングラブ feat.Sou / ナナヲアカリ", "diff": "★8", "genre": "ポップス" },
	{ "date": "2023/06/29", "title": "太陽系デスコ", "diff": "★8", "genre": "ボーカロイド" },
	{ "date": "2023/06/29", "title": "グラーヴェ", "diff": "★8", "genre": "ボーカロイド" },
	{ "date": "2023/06/29", "title": "雨とペトラ", "diff": "★6", "genre": "ボーカロイド" },
	{ "date": "2023/06/29", "title": "乙女解剖", "diff": "★6", "genre": "ボーカロイド" },
	{ "date": "2023/06/29", "title": "BORDERLESS", "diff": "★8", "genre": "ボーカロイド" },
	{ "date": "2023/06/29", "title": "GO ON YA WAY(feat. 超学生)", "diff": "★8", "genre": "ゲームミュージック" },
	{ "date": "2023/06/28", "title": "天体観測", "diff": "★6", "genre": "ポップス" },
	{ "date": "2023/06/28", "title": "ヘビーローテーション", "diff": "★6", "genre": "ポップス" },
	{ "date": "2023/06/28", "title": "Everyday、カチューシャ", "diff": "★6", "genre": "ポップス" },
	{ "date": "2023/06/28", "title": "ラブソングはとまらないよ", "diff": "★6", "genre": "ポップス" },
	{ "date": "2023/06/28", "title": "紅", "diff": "★8", "genre": "ポップス" },
	{ "date": "2023/06/26", "title": "KING", "diff": "★8", "genre": "ボーカロイド" },
	{ "date": "2023/06/26", "title": "ベノム(feat.flower)", "diff": "★8", "genre": "ボーカロイド" },
	{ "date": "2023/06/26", "title": "ネクロファンタジア ～ Arr.Demetori", "diff": "★10", "genre": "バラエティ" },
	{ "date": "2023/06/26", "title": "Clotho クロートー", "diff": "★10", "genre": "ナムコオリジナル" },
	{ "date": "2023/06/26", "title": "アニマル", "diff": "★7", "genre": "ボーカロイド" },
	{ "date": "2023/06/26", "title": "ダン・ダン ドゥビ・ズバー！", "diff": "★7", "genre": "キッズ" },
	{ "date": "2023/06/25", "title": "Blue Rose Ruin", "diff": "★8", "genre": "ナムコオリジナル" },
	{ "date": "2023/06/24", "title": "ザストゥールの魔導書", "diff": "★8", "genre": "ナムコオリジナル" },
	{ "date": "2023/06/24", "title": "Kamikaze Remix", "diff": "★10", "genre": "ゲームミュージック" },
	{ "date": "2023/06/14", "title": "いーあるふぁんくらぶ", "diff": "★8", "genre": "ボーカロイド" },
	{ "date": "2023/06/14", "title": "くまもとサプライズ！ くまモン体操", "diff": "★6", "genre": "キッズ" },
	{ "date": "2023/06/14", "title": "恋", "diff": "★6", "genre": "ポップス" },
	{ "date": "2023/06/14", "title": "われら無敵のドコン団", "diff": "★8", "genre": "ナムコオリジナル" },
	{ "date": "2023/06/11", "title": "ALMIGHTY～仮面の約束", "diff": "★6", "genre": "キッズ" },
	{ "date": "2023/06/11", "title": "轟!!!", "diff": "★6", "genre": "ポップス" },
	{ "date": "2023/06/11", "title": "虹 Fischer's-フィッシャーズ‐", "diff": "★6", "genre": "ポップス" },
	{ "date": "2023/06/11", "title": "YouTubeテーマソング", "diff": "★7", "genre": "ポップス" },
	{ "date": "2023/06/11", "title": "雑草", "diff": "★6", "genre": "ポップス" },
	{ "date": "2023/06/11", "title": "Walking with you", "diff": "★8", "genre": "ポップス" },
	{ "date": "2023/06/11", "title": "全力全開！ゼンカイジャー", "diff": "★6", "genre": "キッズ" },
	{ "date": "2023/06/11", "title": "フォニイ", "diff": "★7", "genre": "ポップス" },
	{ "date": "2023/06/11", "title": "Subtitle", "diff": "★7", "genre": "ポップス" },
	{ "date": "2023/06/11", "title": "全力キング", "diff": "★6", "genre": "アニメ" },
	{ "date": "2023/06/11", "title": "Bukan Cinta Biasa", "diff": "★6", "genre": "ポップス" },
	{ "date": "2023/06/04", "title": "旋風ノ舞【地】", "diff": "★9", "genre": "ナムコオリジナル" },
	{ "date": "2023/05/31", "title": "シオカラ節", "diff": "★7", "genre": "ゲームミュージック" },
	{ "date": "2023/05/27", "title": "super star shooter", "diff": "★8", "genre": "ナムコオリジナル" },
	{ "date": "2023/05/24", "title": "Paradisus-Paradoxum", "diff": "★8", "genre": "アニメ" },
	{ "date": "2023/05/24", "title": "河内音頭 ～ふしづくし～", "diff": "★6", "genre": "クラシック" },
	{ "date": "2023/05/24", "title": "ウキウキオトッペ", "diff": "★9", "genre": "アニメ" },
	{ "date": "2023/05/24", "title": "Just Awake", "diff": "★8", "genre": "ポップス" },
	{ "date": "2023/05/24", "title": "チキチキバンバン", "diff": "★7", "genre": "アニメ" },
	{ "date": "2023/05/24", "title": "踊", "diff": "★8", "genre": "ポップス" },
	{ "date": "2023/05/24", "title": "香水", "diff": "★6", "genre": "ポップス" },
	{ "date": "2023/05/24", "title": "魔法をかけて！（裏）", "diff": "★6", "genre": "ゲームミュージック" },
	{ "date": "2023/05/24", "title": "太鼓ラブ！", "diff": "★5", "genre": "ナムコオリジナル" },
	{ "date": "2023/05/24", "title": "きみのあかり", "diff": "★5", "genre": "ナムコオリジナル" },
	{ "date": "2023/05/24", "title": "MANKAI☆開花宣言", "diff": "★5", "genre": "ゲームミュージック" },
	{ "date": "2023/05/24", "title": "Extreme MGG★★★", "diff": "★5", "genre": "ゲームミュージック" },
	{ "date": "2023/05/24", "title": "ココロ転がせっ！", "diff": "★5", "genre": "キッズ" },
	{ "date": "2023/05/24", "title": "ロックン・ハート！", "diff": "★5", "genre": "キッズ" },
	{ "date": "2023/05/24", "title": "リンダリンダ", "diff": "★5", "genre": "ポップス" },
	{ "date": "2023/05/24", "title": "さんぽ", "diff": "★5", "genre": "キッズ" },
	{ "date": "2023/05/24", "title": "はねまり体操", "diff": "★5", "genre": "キッズ" },
	{ "date": "2023/05/24", "title": "刀剣乱舞", "diff": "★5", "genre": "ポップス" },
	{ "date": "2023/05/24", "title": "今", "diff": "★5", "genre": "ポップス" },
	{ "date": "2023/05/24", "title": "カラフル・パーティ", "diff": "★5", "genre": "キッズ" },
	{ "date": "2023/05/24", "title": "夢をかなえてドラえもん", "diff": "★4", "genre": "キッズ" },
	{ "date": "2023/05/24", "title": "Baby Shark(ベイビー・シャーク)", "diff": "★4", "genre": "キッズ" },
	{ "date": "2023/05/24", "title": "みらくる☆トラベル", "diff": "★4", "genre": "キッズ" },
	{ "date": "2023/05/24", "title": "おどるポンポコリン", "diff": "★4", "genre": "キッズ" },
	{ "date": "2023/05/24", "title": "ぐでたまぷちょへんざ", "diff": "★4", "genre": "キッズ" },
	{ "date": "2023/05/24", "title": "どん子のファーストデート", "diff": "★4", "genre": "ナムコオリジナル" },
	{ "date": "2023/05/24", "title": "ほめのび", "diff": "★4", "genre": "ポップス" },
	{ "date": "2023/05/24", "title": "ゲゲゲの鬼太郎", "diff": "★2", "genre": "キッズ" },
	{ "date": "2023/05/24", "title": "崖の上のポニョ", "diff": "★2", "genre": "キッズ" },
	{ "date": "2023/05/24", "title": "明日も", "diff": "★2", "genre": "ポップス" },
	{ "date": "2023/05/24", "title": "アンパンマンのマーチ", "diff": "★1", "genre": "キッズ" },
	{ "date": "2023/05/19", "title": "アサルト BGM1", "diff": "★8", "genre": "ゲームミュージック" },
	{ "date": "2023/05/19", "title": "GOING TO LUNATEA", "diff": "★8", "genre": "ゲームミュージック" },
	{ "date": "2023/05/19", "title": "残酷な天使のテーゼ（裏）", "diff": "★8", "genre": "アニメ" },
	{ "date": "2023/05/19", "title": "季曲", "diff": "★7", "genre": "ナムコオリジナル" },
	{ "date": "2023/05/17", "title": "プロミスザスター", "diff": "★6", "genre": "ポップス" },
	{ "date": "2023/05/17", "title": "高嶺の花子さん", "diff": "★6", "genre": "ポップス" },
	{ "date": "2023/05/14", "title": "タイムトラベラー", "diff": "★6", "genre": "ナムコオリジナル" },
	{ "date": "2023/05/14", "title": "嘘", "diff": "★6", "genre": "ポップス" },
	{ "date": "2023/05/14", "title": "ONLY MY NOTE", "diff": "★6", "genre": "ゲームミュージック" },
	{ "date": "2023/05/11", "title": "自分REST@RT", "diff": "★7", "genre": "ゲームミュージック" },
	{ "date": "2023/05/11", "title": "S(mile)ING!", "diff": "★6", "genre": "ゲームミュージック" },
	{ "date": "2023/05/08", "title": "命に嫌われている。（裏）", "diff": "★8", "genre": "ボーカロイド" },
	{ "date": "2023/04/26", "title": "Marine Mirage", "diff": "★6", "genre": "バラエティ" },
	{ "date": "2023/04/26", "title": "オリオンをなぞる", "diff": "★7", "genre": "アニメ" },
	{ "date": "2023/04/26", "title": "ヒカリアレ", "diff": "★9", "genre": "アニメ" },
	{ "date": "2023/04/26", "title": "拝啓ドッペルゲンガー", "diff": "★10", "genre": "ボーカロイド" },
	{ "date": "2023/04/26", "title": "ポニーテールとシュシュ", "diff": "★7", "genre": "ポップス" },
	{ "date": "2023/04/26", "title": "奇想天外ふしぎをどうぞ", "diff": "★6", "genre": "キッズ" },
	{ "date": "2023/04/26", "title": "キレキャリオン", "diff": "★8", "genre": "ボーカロイド" },
	{ "date": "2023/04/23", "title": "The world is all one !!", "diff": "★5", "genre": "ゲームミュージック" },
	{ "date": "2023/04/23", "title": "フライングゲット", "diff": "★5", "genre": "ポップス" },
	{ "date": "2023/04/23", "title": "初恋峠でゲラゲラポー", "diff": "★7", "genre": "キッズ" },
	{ "date": "2023/04/22", "title": "怪物", "diff": "★7", "genre": "ポップス" },
	{ "date": "2023/04/22", "title": "祭り囃子でゲラゲラポー", "diff": "★7", "genre": "キッズ" },
	{ "date": "2023/04/22", "title": "阿修羅ちゃん", "diff": "★7", "genre": "ポップス" },
	{ "date": "2023/04/19", "title": "オトナブルー", "diff": "★7", "genre": "ポップス" },
	{ "date": "2023/04/19", "title": "Trust•Last", "diff": "★5", "genre": "キッズ" },
	{ "date": "2023/04/19", "title": "祝福", "diff": "★8", "genre": "ポップス" },
	{ "date": "2023/04/19", "title": "ひろがるスカイ!プリキュア 〜Hero Girls〜", "diff": "★6", "genre": "キッズ" },
	{ "date": "2023/04/19", "title": "トウキョウ・シャンディ・ランデヴ", "diff": "★8", "genre": "ポップス" },
	{ "date": "2023/04/19", "title": "私は最強", "diff": "★7", "genre": "アニメ" },
	{ "date": "2023/04/14", "title": "My Soul,Your Beats!", "diff": "★8", "genre": "アニメ" },
	{ "date": "2023/04/12", "title": "ALIVE", "diff": "★6", "genre": "アニメ" },
	{ "date": "2023/04/12", "title": "Shine!!（裏）", "diff": "★9", "genre": "ゲームミュージック" },
	{ "date": "2023/04/10", "title": "となりのトトロ", "diff": "★5", "genre": "アニメ" },
	{ "date": "2023/04/10", "title": "名探偵コナンメインテーマ", "diff": "★6", "genre": "アニメ" },
	{ "date": "2023/04/10", "title": "前前前世", "diff": "★8", "genre": "ポップス" },
	{ "date": "2023/04/10", "title": "1・2・3", "diff": "★7", "genre": "アニメ" },
	{ "date": "2023/04/09", "title": "mint tears", "diff": "★10", "genre": "ナムコオリジナル" },
	{ "date": "2023/04/09", "title": "ミュージック･リボルバー", "diff": "★4", "genre": "ゲームミュージック" },
	{ "date": "2023/04/09", "title": "フューチャー･ラボ", "diff": "★8", "genre": "ナムコオリジナル" },
	{ "date": "2023/04/09", "title": "桜花爛漫", "diff": "★8", "genre": "ナムコオリジナル" },
	{ "date": "2023/04/08", "title": "残響散歌", "diff": "★7", "genre": "アニメ" },
	{ "date": "2023/03/02", "title": "リンダは今日も絶好調", "diff": "★8", "genre": "ナムコオリジナル" },
	{ "date": "2022/11/04", "title": "新時代", "diff": "★7", "genre": "アニメ" },
	{ "date": "2022/11/04", "title": "千本桜（裏）", "diff": "★8", "genre": "ボーカロイド" },
	{ "date": "2022/09/01", "title": "命に嫌われている。", "diff": "★7", "genre": "ボーカロイド" },
	{ "date": "2022/08/01", "title": "ミックスナッツ", "diff": "★7", "genre": "アニメ" },
	{ "date": "2022/07/28", "title": "シャイニングスター", "diff": "★6", "genre": "ポップス" },
	{ "date": "2022/07/09", "title": "彼は誰時の誘惑", "diff": "★9", "genre": "ナムコオリジナル" },
	{ "date": "2022/07/09", "title": "Realize", "diff": "★7", "genre": "アニメ" },
	{ "date": "2022/07/09", "title": "君の知らない物語", "diff": "★7", "genre": "アニメ" },
	{ "date": "2022/06/27", "title": "アスノヨゾラ哨戒班", "diff": "★9", "genre": "ボーカロイド" },
	{ "date": "2022/06/25", "title": "さいたま2000", "diff": "★7", "genre": "ナムコオリジナル" },
	{ "date": "2022/06/25", "title": "青と夏", "diff": "★6", "genre": "ポップス" },
	{ "date": "2022/06/25", "title": "きょうはたいこ曜日", "diff": "★5", "genre": "ナムコオリジナル" },
	{ "date": "2022/06/24", "title": "世界はいつでもミステリー", "diff": "★7", "genre": "ナムコオリジナル" },
	{ "date": "2022/06/16", "title": "PON PON PON", "diff": "★6", "genre": "ポップス" },
	{ "date": "2022/06/16", "title": "ファッションモンスター", "diff": "★7", "genre": "ポップス" },
	{ "date": "2022/06/16", "title": "インベーダーインベーダー", "diff": "★6", "genre": "ポップス" },
	{ "date": "2022/06/04", "title": "僕らの世界にダンスを", "diff": "★7", "genre": "ボーカロイド" },
	{ "date": "2022/06/04", "title": "恋音と雨空", "diff": "★7", "genre": "ポップス" },
	{ "date": "2022/06/03", "title": "エゴエゴアタクシ", "diff": "★8", "genre": "ナムコオリジナル" },
	{ "date": "2022/06/03", "title": "ようかい体操第一", "diff": "★7", "genre": "キッズ" },
	{ "date": "2022/06/01", "title": "俺こそオンリーワン", "diff": "★6", "genre": "キッズ" },
	{ "date": "2022/06/01", "title": "Cheers!デリシャスパーティ♡プリキュア", "diff": "★3", "genre": "キッズ" },
	{ "date": "2022/06/01", "title": "一途", "diff": "★8", "genre": "ポップス" },
	{ "date": "2022/03/15", "title": "ナイト・オブ・ナイツ", "diff": "★9", "genre": "バラエティ" },
	{ "date": "2022/02/04", "title": "Viva! Spark!トロピカル～ジュ！プリキュア", "diff": "★4", "genre": "キッズ" },
	{ "date": "2022/01/14", "title": "グッバイ宣言", "diff": "★8", "genre": "ボーカロイド" },
	{ "date": "2022/01/14", "title": "うっせぇわ", "diff": "★8", "genre": "ポップス" },
	{ "date": "2022/01/14", "title": "紅蓮華", "diff": "★6", "genre": "アニメ" },
	{ "date": "2022/01/14", "title": "ケラケラホーのうた", "diff": "★3", "genre": "キッズ" },
	{ "date": "2022/01/14", "title": "ぐでたまテーマソング", "diff": "★3", "genre": "キッズ" },
	{ "date": "2022/01/14", "title": "限界突破×サバイバー", "diff": "★3", "genre": "キッズ" },
	{ "date": "2022/01/14", "title": "愛唄", "diff": "★3", "genre": "ポップス" },
	{ "date": "2022/01/14", "title": "よく遊びよく学べ", "diff": "★3", "genre": "ポップス" },
	{ "date": "2022/01/14", "title": "全力バタンキュー", "diff": "★8", "genre": "アニメ" },
	{ "date": "2021/12/21", "title": "残酷な天使のテーゼ", "diff": "★7", "genre": "アニメ" },
	{ "date": "2021/12/21", "title": "曙光", "diff": "★7", "genre": "ナムコオリジナル" },
	{ "date": "2021/12/17", "title": "ロストワンの号哭", "diff": "★8", "genre": "ボーカロイド" },
	{ "date": "2021/12/17", "title": "Fun!Fun!Fun! ～夢∞～", "diff": "★6", "genre": "キッズ" },
	{ "date": "2021/12/17", "title": "僕の戦争", "diff": "★8", "genre": "アニメ" },
	{ "date": "2021/12/17", "title": "明け星", "diff": "★6", "genre": "アニメ" },
	{ "date": "2021/12/17", "title": "シル・ヴ・プレジデント", "diff": "★7", "genre": "ポップス" },
	{ "date": "2021/12/17", "title": "liveDevil", "diff": "★6", "genre": "キッズ" },
	{ "date": "2021/12/10", "title": "Let It Go〜ありのままで〜", "diff": "★4", "genre": "キッズ" },
	{ "date": "2021/12/10", "title": "Grip & Break down !! -達人Edit.-（裏）", "diff": "★9", "genre": "バラエティ" },
	{ "date": "2021/12/10", "title": "PaPaPaLove", "diff": "★8", "genre": "ゲームミュージック" },
	{ "date": "2021/12/08", "title": "黒神クロニクル", "diff": "★7", "genre": "ナムコオリジナル" },
	{ "date": "2021/12/04", "title": "流浪の琥珀姫", "diff": "★8", "genre": "ナムコオリジナル" },
	{ "date": "2021/12/01", "title": "色は匂へど散りぬるを", "diff": "★8", "genre": "バラエティ" },
	{ "date": "2021/11/24", "title": "エンジェルドリーム", "diff": "★8", "genre": "ナムコオリジナル" },
	{ "date": "2021/11/23", "title": "キミと響くハーモニー", "diff": "★6", "genre": "ナムコオリジナル" },
	{ "date": "2021/11/04", "title": "RPG", "diff": "★6", "genre": "ポップス" },
	{ "date": "2021/11/02", "title": "アルカリレットウセイ", "diff": "★7", "genre": "ボーカロイド" },
	{ "date": "2021/10/16", "title": "お願い！シンデレラ", "diff": "★7", "genre": "ゲームミュージック" },
	{ "date": "2021/10/08", "title": "もりのくまさん", "diff": "★1", "genre": "キッズ" },
	{ "date": "2021/10/08", "title": "旋風ノ舞【天】（裏）", "diff": "★10", "genre": "ナムコオリジナル" },
	{ "date": "2021/10/08", "title": "旋風ノ舞【天】", "diff": "★10", "genre": "ナムコオリジナル" },
	{ "date": "2021/09/22", "title": "風のファンタジー", "diff": "★8", "genre": "ナムコオリジナル" },
	{ "date": "2021/09/18", "title": "恋はみずいろ", "diff": "★7", "genre": "ゲームミュージック" },
	{ "date": "2021/09/11", "title": "キラメキラリ", "diff": "★9", "genre": "ゲームミュージック" },
	{ "date": "2021/09/10", "title": "ギンギラ銀河", "diff": "★6", "genre": "キッズ" },
	{ "date": "2021/09/05", "title": "さくらんぼ", "diff": "★8", "genre": "ポップス" },
	{ "date": "2021/09/03", "title": "ウィーアー！", "diff": "★6", "genre": "アニメ" },
	{ "date": "2021/08/20", "title": "夏祭り", "diff": "★6", "genre": "ポップス" },
	{ "date": "2021/08/20", "title": "犬吠える", "diff": "★6", "genre": "ナムコオリジナル" },
	{ "date": "2021/08/20", "title": "READY!!", "diff": "★6", "genre": "ゲームミュージック" },
	{ "date": "2021/08/20", "title": "カレ・カノ・カノン", "diff": "★8", "genre": "クラシック" },
	{ "date": "2021/07/01", "title": "らいとにんぐぱっしょん", "diff": "★7", "genre": "ナムコオリジナル" },
	{ "date": "2021/07/01", "title": "馬と鹿", "diff": "★5", "genre": "ポップス" },
	{ "date": "2021/07/01", "title": "Make debut!", "diff": "★7", "genre": "アニメ" },
	{ "date": "2021/06/28", "title": "ハルウタ", "diff": "★6", "genre": "キッズ" },
	{ "date": "2021/06/28", "title": "未来コネクション", "diff": "★7", "genre": "キッズ" },
	{ "date": "2021/05/28", "title": "裸の心", "diff": "★7", "genre": "ポップス" },
	{ "date": "2021/04/23", "title": "猫", "diff": "★8", "genre": "ポップス" },
	{ "date": "2021/03/29", "title": "only my railgun", "diff": "★7", "genre": "アニメ" },
	{ "date": "2021/03/29", "title": "いつも何度でも", "diff": "★1", "genre": "キッズ" },
	{ "date": "2021/03/28", "title": "超時空アドベンチャー", "diff": "★6", "genre": "ナムコオリジナル" },
	{ "date": "2021/03/28", "title": "宿命", "diff": "★7", "genre": "ポップス" },
	{ "date": "2021/03/28", "title": "テーマ・オブ・半沢直樹 ～Main Title～", "diff": "★8", "genre": "バラエティ" },
	{ "date": "2021/03/28", "title": "月に叢雲華に風", "diff": "★8", "genre": "バラエティ" },
	{ "date": "2021/03/19", "title": "Pretender", "diff": "★5", "genre": "ポップス" },
	{ "date": "2021/03/09", "title": "REAL×EYE", "diff": "★4", "genre": "キッズ" },
	{ "date": "2021/03/09", "title": "魔進戦隊キラメイジャー", "diff": "★5", "genre": "キッズ" },
	{ "date": "2021/03/09", "title": "だから僕は音楽を辞めた", "diff": "★6", "genre": "ポップス" },
	{ "date": "2021/01/28", "title": "炎", "diff": "★4", "genre": "アニメ" },
	{ "date": "2021/01/15", "title": "キセキ", "diff": "★2", "genre": "ポップス" },
	{ "date": "2021/01/15", "title": "チュワパネ！", "diff": "★5", "genre": "キッズ" },
	{ "date": "2020/10/09", "title": "マリーゴールド", "diff": "★6", "genre": "ポップス" },
	{ "date": "2020/10/02", "title": "夜に駆ける", "diff": "★8", "genre": "ポップス" },
	{ "date": "2020/09/18", "title": "Smile! Smile! Smile!", "diff": "★5", "genre": "キッズ" },
	{ "date": "2020/09/15", "title": "HIMAWARI HAPPY", "diff": "★2", "genre": "キッズ" },
	{ "date": "2020/09/15", "title": "愛にできることはまだあるかい", "diff": "★5", "genre": "アニメ" },
	{ "date": "2020/08/28", "title": "まちがいさがし", "diff": "★8", "genre": "ポップス" },
	{ "date": "2020/08/09", "title": "ドラマツルギー", "diff": "★5", "genre": "ポップス" },
	{ "date": "2020/07/02", "title": "あなたとトゥラッタッタ♪", "diff": "★1", "genre": "ポップス" },
	{ "date": "2020/06/20", "title": "君はロックを聴かない", "diff": "★4", "genre": "ポップス" },
	{ "date": "2020/04/14", "title": "マスカット", "diff": "★2", "genre": "キッズ" },
	{ "date": "2020/04/13", "title": "ス•マ•イ•ル", "diff": "★5", "genre": "キッズ" },
	{ "date": "2020/04/02", "title": "ただ君に晴れ", "diff": "★5", "genre": "ポップス" },
];

// 難易度別の雛形を作成
const output = document.querySelector(".result-out");
const levels_table = document.createElement("tr");
for (let i = 0; i < 11; i++) {
	const level_table = document.createElement("th");
	if (i != 10) level_table.textContent = "★ " + (i + 1);
	else level_table.textContent = "合計";
	levels_table.appendChild(level_table);
}

output.appendChild(levels_table);
document.querySelector(".result-out-list").appendChild(output);

// 難易度別の雛形を作成
const level_nums = document.createElement("tr");
for (let i = 0; i < 11; i++) {
	const level_num = document.createElement("td");
	level_nums.appendChild(level_num);
}
output.appendChild(level_nums);
document.querySelector(".result-out-list").appendChild(output);

// ジャンル別の雛形を作成
const genre_output = document.querySelector(".result-genre");
const genre = ["ナムコオリジナル", "ポップス", "キッズ", "アニメ", "ゲームミュージック", "バラエティ", "ボーカロイド", "クラシック"];
const genre_background_color = ["#F67A24", "#4BCADD", "#FAC904", "#F99BDE", "#D195F1", "#3ECE43", "#BEBDCE", "#CEC701"];

const genre_tables = document.createElement("tr");
for (let i = 0; i < genre.length; i++) {
 	const genre_table = document.createElement("th");
 	genre_table.textContent = genre[i];
	genre_table.style.backgroundColor = genre_background_color[i];
 	genre_tables.appendChild(genre_table);
}

genre_output.appendChild(genre_tables);
document.querySelector(".result-genre-list").appendChild(genre_output);

// 全良曲一覧
const result_table = document.querySelector(".result-table");
const result_length = result.length; // 曲数
let diff_num = new Array(10); // 難易度の数
for (let i = 0; i < 10; i++) diff_num[i] = new Array(0, 0);
let genre_num = [0, 0, 0, 0, 0, 0, 0, 0]; // ジャンル別の数

result.forEach((item, index) => {
	const tr = document.createElement("tr");

	// No. の表を作成
	const td_index = document.createElement("td");
	td_index.textContent = result_length - (index);
	tr.appendChild(td_index);

	// オブジェクトの各キーについて処理を行う
	Object.keys(item).forEach((key) => {
		const td = document.createElement("td");
		for (let i = 0; i < genre.length; i++) {
			if (item[key] == genre[i]) tr.style.backgroundColor = genre_background_color[i];
		}

		// テキストの設定
		td.textContent = item[key];

		// 難易度の数を集計
		if (key == "diff") {
			for (let i = 0; i < 10; i++) {
				if (item[key] == '★' + (i + 1)) {
					td.classList.add("diff" + (i + 1));
					if (item["title"].includes("（裏）")) diff_num[i][1] += 1;
					else diff_num[i][0] += 1;
				}
			}
		}

		// ジャンルの数を集計
		if (key == "genre") {
			for (let i = 0; i < genre.length; i++) {
				if (item[key] == genre[i]) {
					genre_num[i] += 1;
					tr.classList.add(item[key]);
				}
			}
		}

		tr.appendChild(td);
	});

	result_table.appendChild(tr);

	// img 列の作成
	const img_link = document.createElement("a");
	const file_path = "./img/result/"
	let number_path = (result.length - (index)).toString().padStart(4, '0');
	img_link.href = file_path + number_path + ".jpg";
	img_link.textContent = "詳細";
	img_link.classList.add("result");
	img_link.setAttribute("data-group", "result");
	const td = document.createElement("td");
	td.appendChild(img_link)
	tr.appendChild(td);
});
document.querySelector(".result-table-list").appendChild(result_table);


// 難易度別の表計算を行う
const level = document.querySelectorAll(".result-out td");
let total_num = 0; // 全良譜面数を計算する
for (let i = 0; i < 11; i++) {
	if (i != 10) {
		level[i].textContent = (diff_num[i][0] + diff_num[i][1]) + " 譜面";
		total_num += diff_num[i][0] + diff_num[i][1];
	} else { // ここで加算してきた total_num を出力する
		level[i].textContent = total_num + " 譜面";
	}
}

// ジャンル別の表計算を行う
const genre_nums = document.createElement("tr");
for (let i = 0; i < genre.length; i++) {
	const genre_table = document.createElement("td");
	genre_table.textContent = genre_num[i] + " 譜面";
	genre_nums.appendChild(genre_table);
}
document.querySelector(".result-genre").appendChild(genre_nums);

// 全良譜面数を計算する
var pTags = document.getElementsByTagName('p');
// クラス名が「zenryou-num」であるpタグを抽出する
for (let i = 0; i < pTags.length; i++) {
	if (pTags[i].classList.contains('zenryou-num')) {
    	pTags[i].textContent = "全良数：" + result.length + "譜面";
  	}
}

// ボタンの表示切り替え
function ShowDifficult(difficult) {
	let table = document.querySelector("table.result-table");
	let rows = table.querySelectorAll("tr");
	for (let i = 0; i < rows.length; i++) {
		let cells = rows[i].querySelectorAll("td");
		if (cells.length == 0) continue;
		if (cells[3].className === "diff" + difficult) {
			rows[i].style.display = "";
		} else {
			rows[i].style.display = "none";
		}
	}

	let len_ = 0;
	// display := "" となっているものを計算する
	for (i = 0; i < rows.length; i++) {
		let cells = rows[i].querySelectorAll("td");
		if (cells.length == 0) continue;
		if (rows[i].style.display == "") {
			len_ += 1;
		}
	}

	let cnt = 0;
	for (let i = 0; i < rows.length; i++) {
		let cells = rows[i].querySelectorAll("td");
		if (rows[i].style.display == "") {
			if (cells.length > 0) {
				cells[0].textContent = len_ - cnt;
				cnt += 1;
			}
		}
	}
}


function ShowGenre(className) {
	let table = document.querySelector("table.result-table");
	let rows = table.querySelectorAll("tr");

	for (let i = 1; i < rows.length; i++) {
		if (rows[i].classList.contains(className)) {
			rows[i].style.display = "";
		} else {
			rows[i].style.display = "none";
		}
	}

	let len_ = 0;
	// display := "" となっているものを計算する
	for (i = 0; i < rows.length; i++) {
		if (rows[i].style.display == "") {
			len_ += 1;
		}
	}

	let cnt = 0;
	for (let i = 0; i < rows.length; i++) {
		let cells = rows[i].querySelectorAll("td");
		if (rows[i].style.display == "") {
			if (cells.length > 0) {
				cells[0].textContent = len_ - cnt - 1;
				cnt += 1;
			}
		}
	}
}

// 全て表示するボタン
function ShowAll() {
	let table = document.querySelector("table.result-table");
	let rows = table.querySelectorAll("tr");
	let len_ = rows.length;
	for (let i = 0; i < len_; i++) {
		rows[i].style.display = "";
		let cells = rows[i].querySelectorAll("td");
		if (cells.length > 0) {
			cells[0].textContent = len_ - i;
		}
	}
}

// // ★10の計算をする
// const table_10 = document.querySelector("table_10");
// console.log(table_10);
// const table_10_td = table_10.getElementsByTagName("td");
// let perfect = 0, full_combo = 0;

// for (let i = 0; i < table_10_td.length; i++) {
// 	if (table_10_td[i].classList.contains("perfect")) {
// 		perfect += 1;
// 	} else if (table_10_td[i].classList.contains("full-combo")) {
// 		full_combo += 1;
// 	}
// }

// let other = table_10_td.length - (perfect + full_combo);
// console.log(perfect. full_combo, other);

// 画像のモーダル
$(".result").modaal({
	type: "image",
	overlay_close:true,//モーダル背景クリック時に閉じるか
	before_open:function(){// モーダルが開く前に行う動作
		$("html").css("overflow-y", "hidden");/*縦スクロールバーを出さない*/
	},
	after_close:function(){ // モーダルが閉じた後に行う動作
		$("html").css("overflow-y","scroll");/*縦スクロールバーを出す*/
	}
});