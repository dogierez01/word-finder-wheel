// words.js - The Complete Master Database (3 to 7 Letter Families)

const wordDatabase = {
    // ==========================================
    // 3-LETTER FAMILIES 
    // ==========================================
    3: [
        {
            baseWord: "BAT", baseTurkish: "Yarasa / Sopa",
            changes: {
                0: [ 
                    { pattern: ["?", "A", "T"], answer: "C", icon: "🐈", turkish: "Kedi" },
                    { pattern: ["?", "A", "T"], answer: "F", icon: "⚖️", turkish: "Şişman / Yağ" },
                    { pattern: ["?", "A", "T"], answer: "H", icon: "🎩", turkish: "Şapka" },
                    { pattern: ["?", "A", "T"], answer: "M", icon: "🚪", turkish: "Paspas / Minder" },
                    { pattern: ["?", "A", "T"], answer: "P", icon: "👋", turkish: "Hafifçe vurmak" },
                    { pattern: ["?", "A", "T"], answer: "R", icon: "🐀", turkish: "Fare" },
                    { pattern: ["?", "A", "T"], answer: "V", icon: "🛢️", turkish: "Fıçı" }
                ],
                1: [ { pattern: ["B", "?", "T"], answer: "U", icon: "🤔", turkish: "Ama / Fakat" } ],
                2: [ 
                    { pattern: ["B", "A", "?"], answer: "D", icon: "👎", turkish: "Kötü" },
                    { pattern: ["B", "A", "?"], answer: "G", icon: "👜", turkish: "Çanta" },
                    { pattern: ["B", "A", "?"], answer: "N", icon: "🚫", turkish: "Yasak" },
                    { pattern: ["B", "A", "?"], answer: "R", icon: "🍫", turkish: "Çubuk / Kalıp" }
                ]
            }
        },
        {
            baseWord: "PAN", baseTurkish: "Tava",
            changes: {
                0: [
                    { pattern: ["?", "A", "N"], answer: "B", icon: "🛑", turkish: "Yasaklamak" },
                    { pattern: ["?", "A", "N"], answer: "C", icon: "🥫", turkish: "Teneke Kutu / Yapabilmek" },
                    { pattern: ["?", "A", "N"], answer: "F", icon: "🌀", turkish: "Vantilatör / Hayran" },
                    { pattern: ["?", "A", "N"], answer: "M", icon: "👨", turkish: "Adam" },
                    { pattern: ["?", "A", "N"], answer: "T", icon: "☀️", turkish: "Bronzlaşmak" },
                    { pattern: ["?", "A", "N"], answer: "V", icon: "🚐", turkish: "Minibüs" }
                ],
                1: [
                    { pattern: ["P", "?", "N"], answer: "E", icon: "🖊️", turkish: "Tükenmez Kalem" },
                    { pattern: ["P", "?", "N"], answer: "I", icon: "📌", turkish: "Toplu İğne" },
                    { pattern: ["P", "?", "N"], answer: "U", icon: "🎭", turkish: "Kelime Oyunu" }
                ],
                2: [
                    { pattern: ["P", "A", "?"], answer: "D", icon: "📝", turkish: "Bloknot / Altlık" },
                    { pattern: ["P", "A", "?"], answer: "L", icon: "🤝", turkish: "Dost / Arkadaş" },
                    { pattern: ["P", "A", "?"], answer: "T", icon: "👋", turkish: "Hafifçe Vurmak" },
                    { pattern: ["P", "A", "?"], answer: "W", icon: "🐾", turkish: "Pati" },
                    { pattern: ["P", "A", "?"], answer: "Y", icon: "💵", turkish: "Ödemek" }
                ]
            }
        },
        {
            baseWord: "POT", baseTurkish: "Tencere / Demlik",
            changes: {
                0: [
                    { pattern: ["?", "O", "T"], answer: "C", icon: "🛏️", turkish: "Karyola" },
                    { pattern: ["?", "O", "T"], answer: "D", icon: "⏺️", turkish: "Nokta" },
                    { pattern: ["?", "O", "T"], answer: "H", icon: "🔥", turkish: "Sıcak" },
                    { pattern: ["?", "O", "T"], answer: "L", icon: "📚", turkish: "Çok / Yığın" },
                    { pattern: ["?", "O", "T"], answer: "N", icon: "❌", turkish: "Değil" },
                    { pattern: ["?", "O", "T"], answer: "R", icon: "🤢", turkish: "Çürümek" }
                ],
                1: [
                    { pattern: ["P", "?", "T"], answer: "A", icon: "👋", turkish: "Okşamak" },
                    { pattern: ["P", "?", "T"], answer: "E", icon: "🐶", turkish: "Evcil Hayvan" },
                    { pattern: ["P", "?", "T"], answer: "I", icon: "🕳️", turkish: "Çukur" }
                ],
                2: [
                    { pattern: ["P", "O", "?"], answer: "D", icon: "🫛", turkish: "Koza" },
                    { pattern: ["P", "O", "?"], answer: "P", icon: "🎈", turkish: "Patlamak" }
                ]
            }
        },
        {
            baseWord: "BUG", baseTurkish: "Böcek",
            changes: {
                0: [
                    { pattern: ["?", "U", "G"], answer: "H", icon: "🫂", turkish: "Sarılmak" },
                    { pattern: ["?", "U", "G"], answer: "J", icon: "🏺", turkish: "Sürahi" },
                    { pattern: ["?", "U", "G"], answer: "L", icon: "🏋️", turkish: "Sürüklemek / Taşımak" },
                    { pattern: ["?", "U", "G"], answer: "M", icon: "☕", turkish: "Kupa" },
                    { pattern: ["?", "U", "G"], answer: "P", icon: "🐕", turkish: "Basık Suratlı Köpek" },
                    { pattern: ["?", "U", "G"], answer: "R", icon: "🧞", turkish: "Halı / Kilim" },
                    { pattern: ["?", "U", "G"], answer: "T", icon: "🧗", turkish: "Güçle Çekmek" }
                ],
                1: [
                    { pattern: ["B", "?", "G"], answer: "A", icon: "🎒", turkish: "Çanta" },
                    { pattern: ["B", "?", "G"], answer: "E", icon: "🥺", turkish: "Yalvarmak" },
                    { pattern: ["B", "?", "G"], answer: "I", icon: "🐘", turkish: "Büyük" },
                    { pattern: ["B", "?", "G"], answer: "O", icon: "🐸", turkish: "Bataklık" }
                ],
                2: [
                    { pattern: ["B", "U", "?"], answer: "D", icon: "🌱", turkish: "Tomurcuk" },
                    { pattern: ["B", "U", "?"], answer: "M", icon: "🚶", turkish: "Serseri / Tembel" },
                    { pattern: ["B", "U", "?"], answer: "N", icon: "🥯", turkish: "Çörek" },
                    { pattern: ["B", "U", "?"], answer: "S", icon: "🚌", turkish: "Otobüs" },
                    { pattern: ["B", "U", "?"], answer: "T", icon: "🤷", turkish: "Ama" }
                ]
            }
        },
        {
            baseWord: "TIP", baseTurkish: "Uç / İpucu / Bahşiş",
            changes: {
                0: [
                    { pattern: ["?", "I", "P"], answer: "D", icon: "🥣", turkish: "Daldırmak" },
                    { pattern: ["?", "I", "P"], answer: "H", icon: "🦴", turkish: "Kalça" },
                    { pattern: ["?", "I", "P"], answer: "L", icon: "👄", turkish: "Dudak" },
                    { pattern: ["?", "I", "P"], answer: "N", icon: "🤏", turkish: "Çimdiklemek" },
                    { pattern: ["?", "I", "P"], answer: "R", icon: "📄", turkish: "Yırtmak" },
                    { pattern: ["?", "I", "P"], answer: "S", icon: "🧃", turkish: "Yudumlamak" },
                    { pattern: ["?", "I", "P"], answer: "Z", icon: "🤐", turkish: "Fermuar" }
                ],
                1: [
                    { pattern: ["T", "?", "P"], answer: "A", icon: "🚰", turkish: "Musluk / Tıklamak" },
                    { pattern: ["T", "?", "P"], answer: "O", icon: "⛰️", turkish: "Üst / Zirve" }
                ],
                2: [
                    { pattern: ["T", "I", "?"], answer: "E", icon: "👔", turkish: "Kravat / Bağlamak" },
                    { pattern: ["T", "I", "?"], answer: "N", icon: "🥫", turkish: "Teneke" }
                ]
            }
        },
        {
            baseWord: "NET", baseTurkish: "Ağ",
            changes: {
                0: [
                    { pattern: ["?", "E", "T"], answer: "B", icon: "🎰", turkish: "Bahis" },
                    { pattern: ["?", "E", "T"], answer: "G", icon: "🤲", turkish: "Almak / Elde Etmek" },
                    { pattern: ["?", "E", "T"], answer: "J", icon: "✈️", turkish: "Tepkili Uçak" },
                    { pattern: ["?", "E", "T"], answer: "L", icon: "👍", turkish: "İzin Vermek" },
                    { pattern: ["?", "E", "T"], answer: "P", icon: "🐈", turkish: "Evcil Hayvan" },
                    { pattern: ["?", "E", "T"], answer: "S", icon: "⚙️", turkish: "Ayarlamak / Takım" },
                    { pattern: ["?", "E", "T"], answer: "V", icon: "🩺", turkish: "Hayvan Doktoru" }
                ],
                1: [ { pattern: ["N", "?", "T"], answer: "U", icon: "🥜", turkish: "Kuruyemiş" } ],
                2: [ { pattern: ["N", "E", "?"], answer: "W", icon: "✨", turkish: "Yeni" } ]
            }
        },
        {
            baseWord: "FIN", baseTurkish: "Yüzgeç",
            changes: {
                0: [
                    { pattern: ["?", "I", "N"], answer: "B", icon: "🗑️", turkish: "Kutu / Çöp Kutusu" },
                    { pattern: ["?", "I", "N"], answer: "K", icon: "👨‍👩‍👦", turkish: "Akraba / Soy" },
                    { pattern: ["?", "I", "N"], answer: "P", icon: "📍", turkish: "Toplu İğne" },
                    { pattern: ["?", "I", "N"], answer: "S", icon: "😈", turkish: "Günah" },
                    { pattern: ["?", "I", "N"], answer: "T", icon: "🥫", turkish: "Teneke Kutu" },
                    { pattern: ["?", "I", "N"], answer: "W", icon: "🏆", turkish: "Kazanmak" }
                ],
                1: [
                    { pattern: ["F", "?", "N"], answer: "A", icon: "🪭", turkish: "Vantilatör / Hayran" },
                    { pattern: ["F", "?", "N"], answer: "U", icon: "🎉", turkish: "Eğlence" }
                ],
                2: [
                    { pattern: ["F", "I", "?"], answer: "B", icon: "🤥", turkish: "Küçük Yalan" },
                    { pattern: ["F", "I", "?"], answer: "G", icon: "🍃", turkish: "İncir" },
                    { pattern: ["F", "I", "?"], answer: "X", icon: "🔧", turkish: "Tamir Etmek" }
                ]
            }
        },
        {
            baseWord: "CAP", baseTurkish: "Kasket / Kapak",
            changes: {
                0: [
                    { pattern: ["?", "A", "P"], answer: "G", icon: "🌉", turkish: "Boşluk / Uçurum" },
                    { pattern: ["?", "A", "P"], answer: "L", icon: "🏃", turkish: "Tur / Kucak" },
                    { pattern: ["?", "A", "P"], answer: "M", icon: "🗺️", turkish: "Harita" },
                    { pattern: ["?", "A", "P"], answer: "N", icon: "😴", turkish: "Şekerleme Yapmak" },
                    { pattern: ["?", "A", "P"], answer: "R", icon: "🎤", turkish: "Sertçe Vurmak" },
                    { pattern: ["?", "A", "P"], answer: "S", icon: "🍁", turkish: "Özsuyu" },
                    { pattern: ["?", "A", "P"], answer: "T", icon: "🚰", turkish: "Musluk" },
                    { pattern: ["?", "A", "P"], answer: "Y", icon: "🗣️", turkish: "Havlamak / Gevezelik Etmek" }
                ],
                1: [
                    { pattern: ["C", "?", "P"], answer: "O", icon: "👮", turkish: "Polis" },
                    { pattern: ["C", "?", "P"], answer: "U", icon: "☕", turkish: "Fincan / Kupa" }
                ],
                2: [
                    { pattern: ["C", "A", "?"], answer: "B", icon: "🚕", turkish: "Taksi" },
                    { pattern: ["C", "A", "?"], answer: "D", icon: "😒", turkish: "Kaba Adam" },
                    { pattern: ["C", "A", "?"], answer: "M", icon: "📷", turkish: "Fotoğraf Makinesi" },
                    { pattern: ["C", "A", "?"], answer: "N", icon: "🥫", turkish: "Teneke Kutu" },
                    { pattern: ["C", "A", "?"], answer: "R", icon: "🚗", turkish: "Araba" },
                    { pattern: ["C", "A", "?"], answer: "T", icon: "🐱", turkish: "Kedi" }
                ]
            }
        },
        {
            baseWord: "HOP", baseTurkish: "Sıçramak",
            changes: {
                0: [
                    { pattern: ["?", "O", "P"], answer: "C", icon: "👮", turkish: "Polis" },
                    { pattern: ["?", "O", "P"], answer: "M", icon: "🧹", turkish: "Paspas" },
                    { pattern: ["?", "O", "P"], answer: "P", icon: "💥", turkish: "Patlamak" },
                    { pattern: ["?", "O", "P"], answer: "T", icon: "🔝", turkish: "Üst" }
                ],
                1: [ { pattern: ["H", "?", "P"], answer: "I", icon: "🦴", turkish: "Kalça" } ],
                2: [
                    { pattern: ["H", "O", "?"], answer: "G", icon: "🐖", turkish: "Domuz" },
                    { pattern: ["H", "O", "?"], answer: "T", icon: "🥵", turkish: "Sıcak" },
                    { pattern: ["H", "O", "?"], answer: "W", icon: "❓", turkish: "Nasıl" }
                ]
            }
        },
        {
            baseWord: "MAD", baseTurkish: "Kızgın / Deli",
            changes: {
                0: [
                    { pattern: ["?", "A", "D"], answer: "B", icon: "👎", turkish: "Kötü" },
                    { pattern: ["?", "A", "D"], answer: "D", icon: "👨‍👧", turkish: "Baba" },
                    { pattern: ["?", "A", "D"], answer: "F", icon: "🕶️", turkish: "Geçici Moda / Heves" },
                    { pattern: ["?", "A", "D"], answer: "P", icon: "📝", turkish: "Bloknot / Altlık" },
                    { pattern: ["?", "A", "D"], answer: "S", icon: "😢", turkish: "Üzgün" }
                ],
                1: [ { pattern: ["M", "?", "D"], answer: "U", icon: "💩", turkish: "Çamur" } ],
                2: [
                    { pattern: ["M", "A", "?"], answer: "C", icon: "🧥", turkish: "Yağmurluk" },
                    { pattern: ["M", "A", "?"], answer: "N", icon: "👨", turkish: "Adam" },
                    { pattern: ["M", "A", "?"], answer: "P", icon: "🗺️", turkish: "Harita" },
                    { pattern: ["M", "A", "?"], answer: "T", icon: "🚪", turkish: "Paspas" },
                    { pattern: ["M", "A", "?"], answer: "W", icon: "👄", turkish: "Hayvan Ağzı / Mide" }
                ]
            }
        },
        {
            baseWord: "TEN", baseTurkish: "On",
            changes: {
                0: [
                    { pattern: ["?", "E", "N"], answer: "D", icon: "🐻", turkish: "İn / Mağara" },
                    { pattern: ["?", "E", "N"], answer: "H", icon: "🐔", turkish: "Tavuk" },
                    { pattern: ["?", "E", "N"], answer: "M", icon: "👨‍👨‍👦", turkish: "Adamlar" },
                    { pattern: ["?", "E", "N"], answer: "P", icon: "🖊️", turkish: "Tükenmez Kalem" }
                ],
                1: [
                    { pattern: ["T", "?", "N"], answer: "A", icon: "☀️", turkish: "Bronzlaşmak" },
                    { pattern: ["T", "?", "N"], answer: "I", icon: "🥫", turkish: "Teneke" },
                    { pattern: ["T", "?", "N"], answer: "O", icon: "🐘", turkish: "Ağırlık Birimi (1000 kg)" }
                ],
                2: [ { pattern: ["T", "E", "?"], answer: "A", icon: "🍵", turkish: "Çay" } ]
            }
        },
        {
            baseWord: "LOG", baseTurkish: "Kütük / Tomruk",
            changes: {
                0: [
                    { pattern: ["?", "O", "G"], answer: "B", icon: "🐸", turkish: "Bataklık" },
                    { pattern: ["?", "O", "G"], answer: "C", icon: "⚙️", turkish: "Dişli" },
                    { pattern: ["?", "O", "G"], answer: "D", icon: "🐕", turkish: "Köpek" },
                    { pattern: ["?", "O", "G"], answer: "F", icon: "🌫️", turkish: "Sis" },
                    { pattern: ["?", "O", "G"], answer: "H", icon: "🐖", turkish: "Domuz" },
                    { pattern: ["?", "O", "G"], answer: "J", icon: "🏃", turkish: "Hafif Koşu" }
                ],
                1: [
                    { pattern: ["L", "?", "G"], answer: "A", icon: "⏳", turkish: "Gecikme" },
                    { pattern: ["L", "?", "G"], answer: "E", icon: "🦵", turkish: "Bacak" }
                ],
                2: [
                    { pattern: ["L", "O", "?"], answer: "T", icon: "📦", turkish: "Çok / Yığın" },
                    { pattern: ["L", "O", "?"], answer: "W", icon: "📉", turkish: "Düşük" }
                ]
            }
        },
        {
            baseWord: "SUN", baseTurkish: "Güneş",
            changes: {
                0: [
                    { pattern: ["?", "U", "N"], answer: "B", icon: "🥯", turkish: "Çörek" },
                    { pattern: ["?", "U", "N"], answer: "F", icon: "🎉", turkish: "Eğlence" },
                    { pattern: ["?", "U", "N"], answer: "G", icon: "🔫", turkish: "Silah" },
                    { pattern: ["?", "U", "N"], answer: "N", icon: "⛪", turkish: "Rahibe" },
                    { pattern: ["?", "U", "N"], answer: "P", icon: "🎭", turkish: "Kelime Oyunu" },
                    { pattern: ["?", "U", "N"], answer: "R", icon: "🏃", turkish: "Koşmak" }
                ],
                1: [
                    { pattern: ["S", "?", "N"], answer: "I", icon: "😈", turkish: "Günah" },
                    { pattern: ["S", "?", "N"], answer: "O", icon: "👦", turkish: "Erkek Evlat" }
                ],
                2: [
                    { pattern: ["S", "U", "?"], answer: "B", icon: "🥪", turkish: "Denizaltı / Sandviç" },
                    { pattern: ["S", "U", "?"], answer: "M", icon: "➕", turkish: "Toplam" }
                ]
            }
        },
        {
            baseWord: "CUT", baseTurkish: "Kesmek",
            changes: {
                0: [
                    { pattern: ["?", "U", "T"], answer: "B", icon: "🤷", turkish: "Ama / Fakat" },
                    { pattern: ["?", "U", "T"], answer: "G", icon: "🩻", turkish: "Bağırsak / İçgüdü" },
                    { pattern: ["?", "U", "T"], answer: "H", icon: "🛖", turkish: "Kulübe" },
                    { pattern: ["?", "U", "T"], answer: "N", icon: "🥜", turkish: "Kuruyemiş" },
                    { pattern: ["?", "U", "T"], answer: "R", icon: "🚜", turkish: "Tekerlek İzi / Alışkanlık" }
                ],
                1: [
                    { pattern: ["C", "?", "T"], answer: "A", icon: "🐱", turkish: "Kedi" },
                    { pattern: ["C", "?", "T"], answer: "O", icon: "🛏️", turkish: "Karyola" }
                ],
                2: [
                    { pattern: ["C", "U", "?"], answer: "B", icon: "🐻", turkish: "Yavru Hayvan" },
                    { pattern: ["C", "U", "?"], answer: "D", icon: "🐄", turkish: "Geviş Getirmek" },
                    { pattern: ["C", "U", "?"], answer: "E", icon: "🎱", turkish: "İşaret / Istaka" },
                    { pattern: ["C", "U", "?"], answer: "P", icon: "☕", turkish: "Fincan / Kupa" }
                ]
            }
        },
        {
            baseWord: "RED", baseTurkish: "Kırmızı",
            changes: {
                0: [
                    { pattern: ["?", "E", "D"], answer: "B", icon: "🛏️", turkish: "Yatak" },
                    { pattern: ["?", "E", "D"], answer: "F", icon: "🍲", turkish: "Beslenmiş" },
                    { pattern: ["?", "E", "D"], answer: "W", icon: "💍", turkish: "Evlenmek" }
                ],
                1: [
                    { pattern: ["R", "?", "D"], answer: "I", icon: "🗑️", turkish: "Kurtulmak" },
                    { pattern: ["R", "?", "D"], answer: "O", icon: "🎣", turkish: "Çubuk / Olta" }
                ],
                2: [ { pattern: ["R", "E", "?"], answer: "F", icon: "⚽", turkish: "Hakem" } ]
            }
        }
    ],

    // ==========================================
    // 4-LETTER FAMILIES 
    // ==========================================
    4: [
        {
            baseWord: "BEAR", baseTurkish: "Ayı",
            changes: {
                0: [ 
                    { pattern: ["?", "E", "A", "R"], answer: "D", icon: "💌", turkish: "Sevgili" },
                    { pattern: ["?", "E", "A", "R"], answer: "F", icon: "😨", turkish: "Korku" },
                    { pattern: ["?", "E", "A", "R"], answer: "G", icon: "⚙️", turkish: "Dişli" },
                    { pattern: ["?", "E", "A", "R"], answer: "H", icon: "👂", turkish: "Duymak" },
                    { pattern: ["?", "E", "A", "R"], answer: "N", icon: "📍", turkish: "Yakın" },
                    { pattern: ["?", "E", "A", "R"], answer: "P", icon: "🍐", turkish: "Armut" },
                    { pattern: ["?", "E", "A", "R"], answer: "R", icon: "🔙", turkish: "Arka" },
                    { pattern: ["?", "E", "A", "R"], answer: "T", icon: "💧", turkish: "Gözyaşı" },
                    { pattern: ["?", "E", "A", "R"], answer: "W", icon: "👕", turkish: "Giyinmek" }
                ],
                1: [ 
                    { pattern: ["B", "?", "A", "R"], answer: "O", icon: "🐗", turkish: "Yaban Domuzu" },
                    { pattern: ["B", "?", "A", "R"], answer: "REMOVE", icon: "🍫", turkish: "Çubuk / Tezgah" }
                ],
                2: [ { pattern: ["B", "E", "?", "R"], answer: "E", icon: "🍺", turkish: "Bira" } ]
            }
        },
        {
            baseWord: "CART", baseTurkish: "Alışveriş Arabası",
            changes: {
                0: [ 
                    { pattern: ["?", "A", "R", "T"], answer: "D", icon: "🎯", turkish: "Ok / Fırlatmak" },
                    { pattern: ["?", "A", "R", "T"], answer: "P", icon: "🧩", turkish: "Bölüm" },
                    { pattern: ["?", "A", "R", "T"], answer: "T", icon: "🥧", turkish: "Ekşi / Meyveli Turta" },
                    { pattern: ["?", "A", "R", "T"], answer: "REMOVE", icon: "🎨", turkish: "Sanat" }
                ],
                2: [ { pattern: ["C", "A", "?", "T"], answer: "S", icon: "🎣", turkish: "Fırlatmak / Alçı" } ],
                3: [ { pattern: ["C", "A", "R", "?"], answer: "REMOVE", icon: "🚗", turkish: "Araba" } ]
            }
        },
        {
            baseWord: "PANT", baseTurkish: "Solumak",
            changes: {
                0: [ 
                    { pattern: ["?", "A", "N", "T"], answer: "C", icon: "📐", turkish: "Eğiklik" },
                    { pattern: ["?", "A", "N", "T"], answer: "R", icon: "🗣️", turkish: "Bağırıp Çağırmak" },
                    { pattern: ["?", "A", "N", "T"], answer: "REMOVE", icon: "🐜", turkish: "Karınca" }
                ],
                1: [ { pattern: ["P", "?", "N", "T"], answer: "I", icon: "🥛", turkish: "Sıvı Ölçüsü" } ],
                2: [ { pattern: ["P", "A", "?", "T"], answer: "REMOVE", icon: "👋", turkish: "Hafifçe Vurmak" } ],
                3: [ { pattern: ["P", "A", "N", "?"], answer: "REMOVE", icon: "🍳", turkish: "Tava" } ]
            }
        },
        {
            baseWord: "WIND", baseTurkish: "Rüzgar",
            changes: {
                0: [ 
                    { pattern: ["?", "I", "N", "D"], answer: "B", icon: "🔗", turkish: "Bağlamak" },
                    { pattern: ["?", "I", "N", "D"], answer: "F", icon: "🔍", turkish: "Bulmak" },
                    { pattern: ["?", "I", "N", "D"], answer: "H", icon: "🦌", turkish: "Arka" },
                    { pattern: ["?", "I", "N", "D"], answer: "K", icon: "💖", turkish: "Kibar" },
                    { pattern: ["?", "I", "N", "D"], answer: "M", icon: "🧠", turkish: "Akıl" },
                    { pattern: ["?", "I", "N", "D"], answer: "R", icon: "🍋", turkish: "Kabuk" }
                ],
                1: [ { pattern: ["W", "?", "N", "D"], answer: "A", icon: "🪄", turkish: "Asa" } ],
                3: [ { pattern: ["W", "I", "N", "?"], answer: "REMOVE", icon: "🏆", turkish: "Kazanmak" } ]
            }
        },
        {
            baseWord: "MEAT", baseTurkish: "Et",
            changes: {
                0: [ 
                    { pattern: ["?", "E", "A", "T"], answer: "B", icon: "🥁", turkish: "Vurmak" },
                    { pattern: ["?", "E", "A", "T"], answer: "H", icon: "🔥", turkish: "Sıcaklık" },
                    { pattern: ["?", "E", "A", "T"], answer: "N", icon: "🧹", turkish: "Düzenli" },
                    { pattern: ["?", "E", "A", "T"], answer: "P", icon: "🌱", turkish: "Turba Toprağı" },
                    { pattern: ["?", "E", "A", "T"], answer: "S", icon: "🪑", turkish: "Oturacak Yer" }
                ],
                1: [ 
                    { pattern: ["M", "?", "A", "T"], answer: "O", icon: "🏰", turkish: "Hendek" },
                    { pattern: ["M", "?", "A", "T"], answer: "REMOVE", icon: "🚪", turkish: "Paspas" }
                ]
            }
        },
        {
            baseWord: "COLD", baseTurkish: "Soğuk",
            changes: {
                0: [ 
                    { pattern: ["?", "O", "L", "D"], answer: "B", icon: "🦸", turkish: "Cesur" },
                    { pattern: ["?", "O", "L", "D"], answer: "F", icon: "📄", turkish: "Katlamak" },
                    { pattern: ["?", "O", "L", "D"], answer: "G", icon: "🥇", turkish: "Altın" },
                    { pattern: ["?", "O", "L", "D"], answer: "H", icon: "✊", turkish: "Tutmak" },
                    { pattern: ["?", "O", "L", "D"], answer: "M", icon: "🦠", turkish: "Küf" },
                    { pattern: ["?", "O", "L", "D"], answer: "S", icon: "💰", turkish: "Satıldı" },
                    { pattern: ["?", "O", "L", "D"], answer: "REMOVE", icon: "👴", turkish: "Eski / Yaşlı" }
                ],
                1: [ { pattern: ["C", "?", "L", "D"], answer: "R", icon: "🧶", turkish: "Kablo / İp" } ]
            }
        },
        {
            baseWord: "TONE", baseTurkish: "Ses Vurgusu",
            changes: {
                0: [ 
                    { pattern: ["?", "O", "N", "E"], answer: "B", icon: "🦴", turkish: "Kemik" },
                    { pattern: ["?", "O", "N", "E"], answer: "C", icon: "🍦", turkish: "Koni" },
                    { pattern: ["?", "O", "N", "E"], answer: "L", icon: "🐺", turkish: "Yalnız" },
                    { pattern: ["?", "O", "N", "E"], answer: "Z", icon: "🚧", turkish: "Bölge" }
                ],
                1: [ { pattern: ["T", "?", "N", "E"], answer: "U", icon: "🎵", turkish: "Melodi" } ],
                3: [ { pattern: ["T", "O", "N", "?"], answer: "REMOVE", icon: "🐘", turkish: "Ağırlık Birimi" } ]
            }
        },
        {
            baseWord: "BOWL", baseTurkish: "Derin Kase",
            changes: {
                0: [ 
                    { pattern: ["?", "O", "W", "L"], answer: "F", icon: "🦃", turkish: "Kümes Hayvanı" },
                    { pattern: ["?", "O", "W", "L"], answer: "H", icon: "🐺", turkish: "Ulumak" }
                ],
                1: [ { pattern: ["B", "?", "W", "L"], answer: "A", icon: "😭", turkish: "Bağıra Çağıra Ağlamak" } ],
                3: [ { pattern: ["B", "O", "W", "?"], answer: "REMOVE", icon: "🏹", turkish: "Yay / Eğilmek" } ]
            }
        },
        {
            baseWord: "CAME", baseTurkish: "Geldi",
            changes: {
                0: [ 
                    { pattern: ["?", "A", "M", "E"], answer: "D", icon: "💃", turkish: "Hanımefendi" },
                    { pattern: ["?", "A", "M", "E"], answer: "F", icon: "🌟", turkish: "Şöhret" },
                    { pattern: ["?", "A", "M", "E"], answer: "G", icon: "🎲", turkish: "Oyun" },
                    { pattern: ["?", "A", "M", "E"], answer: "L", icon: "🩼", turkish: "Topal" },
                    { pattern: ["?", "A", "M", "E"], answer: "N", icon: "📛", turkish: "İsim" },
                    { pattern: ["?", "A", "M", "E"], answer: "S", icon: "👯", turkish: "Aynı" },
                    { pattern: ["?", "A", "M", "E"], answer: "T", icon: "🐕", turkish: "Evcil" }
                ],
                2: [ 
                    { pattern: ["C", "A", "?", "E"], answer: "P", icon: "🦸", turkish: "Pelerin" },
                    { pattern: ["C", "A", "?", "E"], answer: "R", icon: "🫂", turkish: "Önemsemek" },
                    { pattern: ["C", "A", "?", "E"], answer: "S", icon: "💼", turkish: "Dava / Kutu" },
                    { pattern: ["C", "A", "?", "E"], answer: "V", icon: "🦇", turkish: "Mağara" }
                ],
                3: [ { pattern: ["C", "A", "M", "?"], answer: "REMOVE", icon: "⚙️", turkish: "Görüntü Kaydedici / Eksantrik" } ]
            }
        },
        {
            baseWord: "STOP", baseTurkish: "Durmak",
            changes: {
                0: [ { pattern: ["?", "T", "O", "P"], answer: "REMOVE", icon: "🔝", turkish: "Üst / Zirve" } ],
                1: [ { pattern: ["S", "?", "O", "P"], answer: "L", icon: "🐖", turkish: "Dökmek" } ],
                2: [ { pattern: ["S", "T", "?", "P"], answer: "E", icon: "👞", turkish: "Adım" } ]
            }
        }
    ],

    // ==========================================
    // 5-LETTER FAMILIES 
    // ==========================================
    5: [
        {
            baseWord: "BEAST", baseTurkish: "Canavar",
            changes: {
                0: [ 
                    { pattern: ["?", "E", "A", "S", "T"], answer: "F", icon: "🍗", turkish: "Ziyafet" },
                    { pattern: ["?", "E", "A", "S", "T"], answer: "Y", icon: "🍞", turkish: "Maya" }
                ],
                1: [ { pattern: ["B", "?", "A", "S", "T"], answer: "O", icon: "🗣️", turkish: "Övünmek" } ],
                2: [ { pattern: ["B", "E", "?", "S", "T"], answer: "REMOVE", icon: "🥇", turkish: "En İyi" } ]
            }
        },
        {
            baseWord: "BLAND", baseTurkish: "Yavan / Tatsız",
            changes: {
                0: [ { pattern: ["?", "L", "A", "N", "D"], answer: "G", icon: "💧", turkish: "Salgı Bezi" } ],
                1: [ { pattern: ["B", "?", "A", "N", "D"], answer: "REMOVE", icon: "🎸", turkish: "Topluluk" } ],
                2: [ 
                    { pattern: ["B", "L", "?", "N", "D"], answer: "I", icon: "🦯", turkish: "Kör" },
                    { pattern: ["B", "L", "?", "N", "D"], answer: "O", icon: "👱", turkish: "Sarışın" }
                ]
            }
        },
        {
            baseWord: "TRACK", baseTurkish: "İz / Yörünge",
            changes: {
                0: [ 
                    { pattern: ["?", "R", "A", "C", "K"], answer: "C", icon: "⚡", turkish: "Çatlak" },
                    { pattern: ["?", "R", "A", "C", "K"], answer: "S", icon: "👋", turkish: "Şaplak" },
                    { pattern: ["?", "R", "A", "C", "K"], answer: "REMOVE", icon: "🪚", turkish: "Raf" }
                ],
                1: [ { pattern: ["T", "?", "A", "C", "K"], answer: "REMOVE", icon: "📌", turkish: "Raptiye" } ],
                2: [ 
                    { pattern: ["T", "R", "?", "C", "K"], answer: "I", icon: "🎩", turkish: "Hile" },
                    { pattern: ["T", "R", "?", "C", "K"], answer: "U", icon: "🚚", turkish: "Kamyon" }
                ]
            }
        },
        {
            baseWord: "SCARE", baseTurkish: "Korkutmak",
            changes: {
                0: [ { pattern: ["?", "C", "A", "R", "E"], answer: "REMOVE", icon: "🫂", turkish: "Önemsemek" } ],
                1: [ 
                    { pattern: ["S", "?", "A", "R", "E"], answer: "H", icon: "🤝", turkish: "Paylaşmak" },
                    { pattern: ["S", "?", "A", "R", "E"], answer: "N", icon: "🪤", turkish: "Tuzak" },
                    { pattern: ["S", "?", "A", "R", "E"], answer: "P", icon: "🎳", turkish: "Yedek" },
                    { pattern: ["S", "?", "A", "R", "E"], answer: "T", icon: "👀", turkish: "Gözünü Dikmek" }
                ],
                2: [ { pattern: ["S", "C", "?", "R", "E"], answer: "O", icon: "💯", turkish: "Puan / Sonuç" } ],
                4: [ { pattern: ["S", "C", "A", "R", "?"], answer: "REMOVE", icon: "🤕", turkish: "Yara İzi" } ]
            }
        },
        {
            baseWord: "TRAIN", baseTurkish: "Eğitmek / Demir Yolu Aracı",
            changes: {
                0: [ 
                    { pattern: ["?", "R", "A", "I", "N"], answer: "B", icon: "🧠", turkish: "Beyin" },
                    { pattern: ["?", "R", "A", "I", "N"], answer: "D", icon: "🚰", turkish: "Gider" },
                    { pattern: ["?", "R", "A", "I", "N"], answer: "G", icon: "🌾", turkish: "Tahıl" },
                    { pattern: ["?", "R", "A", "I", "N"], answer: "REMOVE", icon: "🌧️", turkish: "Yağmur" }
                ],
                4: [ 
                    { pattern: ["T", "R", "A", "I", "?"], answer: "L", icon: "🛤️", turkish: "Patika" },
                    { pattern: ["T", "R", "A", "I", "?"], answer: "T", icon: "🧬", turkish: "Karakter Özelliği" }
                ]
            }
        },
        {
            baseWord: "SPARK", baseTurkish: "Kıvılcım",
            changes: {
                0: [ { pattern: ["?", "P", "A", "R", "K"], answer: "REMOVE", icon: "🏞️", turkish: "Yeşil Alan" } ],
                2: [ { pattern: ["S", "P", "?", "R", "K"], answer: "O", icon: "🍴", turkish: "Kaşıklı Çatal" } ]
            }
        },
        {
            baseWord: "WHEAT", baseTurkish: "Buğday",
            changes: {
                0: [ 
                    { pattern: ["?", "H", "E", "A", "T"], answer: "C", icon: "🃏", turkish: "Hile Yapmak" },
                    { pattern: ["?", "H", "E", "A", "T"], answer: "REMOVE", icon: "🔥", turkish: "Isı" }
                ]
            }
        },
        {
            baseWord: "PRICE", baseTurkish: "Bedel / Değer",
            changes: {
                0: [ 
                    { pattern: ["?", "R", "I", "C", "E"], answer: "T", icon: "⏱️", turkish: "Göz Açıp Kapayıncaya Kadar" },
                    { pattern: ["?", "R", "I", "C", "E"], answer: "REMOVE", icon: "🍚", turkish: "Pirinç" }
                ]
            }
        },
        {
            baseWord: "CHARM", baseTurkish: "Cazibe",
            changes: {
                0: [ { pattern: ["?", "H", "A", "R", "M"], answer: "REMOVE", icon: "🤕", turkish: "Zarar" } ],
                3: [ { pattern: ["C", "H", "A", "?", "M"], answer: "T", icon: "📊", turkish: "Çizelge" } ]
            }
        },
        {
            baseWord: "BROAD", baseTurkish: "Geniş",
            changes: {
                0: [ { pattern: ["?", "R", "O", "A", "D"], answer: "REMOVE", icon: "🛣️", turkish: "Yol" } ],
                2: [ 
                    { pattern: ["B", "R", "?", "A", "D"], answer: "A", icon: "👧", turkish: "Örgü" },
                    { pattern: ["B", "R", "?", "A", "D"], answer: "E", icon: "🍞", turkish: "Ekmek" }
                ]
            }
        }
    ],

    // ==========================================
    // 6-LETTER FAMILIES 
    // ==========================================
    6: [
        {
            baseWord: "PLANET", baseTurkish: "Gezegen",
            changes: {
                4: [ { pattern: ["P", "L", "A", "N", "?", "T"], answer: "REMOVE", icon: "🌱", turkish: "Bitki" } ],
                5: [ { pattern: ["P", "L", "A", "N", "E", "?"], answer: "R", icon: "🗜️", turkish: "Rende Makinesi" } ]
            }
        },
        {
            baseWord: "STRAIN", baseTurkish: "Gerginlik",
            changes: {
                0: [ 
                    { pattern: ["?", "T", "R", "A", "I", "N"], answer: "P", icon: "🦵", turkish: "Burkulma" },
                    { pattern: ["?", "T", "R", "A", "I", "N"], answer: "REMOVE", icon: "🚂", turkish: "Eğitmek" }
                ],
                2: [ { pattern: ["S", "T", "?", "A", "I", "N"], answer: "REMOVE", icon: "☕", turkish: "Leke" } ]
            }
        },
        {
            baseWord: "HEARTH", baseTurkish: "Ocak / Şömine",
            changes: {
                0: [ { pattern: ["?", "E", "A", "R", "T", "H"], answer: "REMOVE", icon: "🌍", turkish: "Dünya" } ],
                5: [ { pattern: ["H", "E", "A", "R", "T", "?"], answer: "REMOVE", icon: "❤️", turkish: "Kalp" } ]
            }
        },
        {
            baseWord: "THREAD", baseTurkish: "İplik",
            changes: {
                1: [ { pattern: ["T", "?", "R", "E", "A", "D"], answer: "REMOVE", icon: "🥾", turkish: "Adım Atmak" } ],
                5: [ { pattern: ["T", "H", "R", "E", "A", "?"], answer: "T", icon: "⚠️", turkish: "Tehdit" } ]
            }
        },
        {
            baseWord: "SCREAM", baseTurkish: "Çığlık",
            changes: {
                0: [ { pattern: ["?", "C", "R", "E", "A", "M"], answer: "REMOVE", icon: "🍦", turkish: "Kaymak" } ],
                1: [ { pattern: ["S", "?", "R", "E", "A", "M"], answer: "T", icon: "🏞️", turkish: "Akarsu" } ]
            }
        },
        {
            baseWord: "FLIGHT", baseTurkish: "Uçuş",
            changes: {
                0: [ 
                    { pattern: ["?", "L", "I", "G", "H", "T"], answer: "B", icon: "🥀", turkish: "Hastalık" },
                    { pattern: ["?", "L", "I", "G", "H", "T"], answer: "P", icon: "😰", turkish: "Zor Durum" },
                    { pattern: ["?", "L", "I", "G", "H", "T"], answer: "S", icon: "🪶", turkish: "Hafif / Az" },
                    { pattern: ["?", "L", "I", "G", "H", "T"], answer: "REMOVE", icon: "💡", turkish: "Işık" }
                ]
            }
        },
        {
            baseWord: "BRIGHT", baseTurkish: "Parlak",
            changes: {
                0: [ 
                    { pattern: ["?", "R", "I", "G", "H", "T"], answer: "F", icon: "😱", turkish: "Korku" },
                    { pattern: ["?", "R", "I", "G", "H", "T"], answer: "REMOVE", icon: "➡️", turkish: "Doğru / Sağ" }
                ]
            }
        },
        {
            baseWord: "STROKE", baseTurkish: "Vuruş / Felç",
            changes: {
                2: [ { pattern: ["S", "T", "?", "O", "K", "E"], answer: "REMOVE", icon: "🔥", turkish: "Ateşi Harlamak" } ],
                3: [ { pattern: ["S", "T", "R", "?", "K", "E"], answer: "I", icon: "🎳", turkish: "Vurmak" } ]
            }
        },
        {
            baseWord: "SPLASH", baseTurkish: "Sıçramak",
            changes: {
                0: [ { pattern: ["?", "P", "L", "A", "S", "H"], answer: "REMOVE", icon: "💦", turkish: "Şıpırtı" } ],
                1: [ { pattern: ["S", "?", "L", "A", "S", "H"], answer: "REMOVE", icon: "🗡️", turkish: "Eğik Çizgi" } ],
                2: [ { pattern: ["S", "P", "?", "A", "S", "H"], answer: "M", icon: "💥", turkish: "Parçalamak" } ]
            }
        },
        {
            baseWord: "BRIDGE", baseTurkish: "Köprü",
            changes: {
                0: [ 
                    { pattern: ["?", "R", "I", "D", "G", "E"], answer: "F", icon: "🧊", turkish: "Soğutucu" },
                    { pattern: ["?", "R", "I", "D", "G", "E"], answer: "REMOVE", icon: "⛰️", turkish: "Bayır / Sırt" }
                ]
            }
        }
    ],

    // ==========================================
    // 7-LETTER FAMILIES 
    // ==========================================
    7: [
        {
            baseWord: "CHATTER", baseTurkish: "Gevezelik",
            changes: {
                0: [ 
                    { pattern: ["?", "H", "A", "T", "T", "E", "R"], answer: "S", icon: "⚡", turkish: "Tuzla Buz Olmak" },
                    { pattern: ["?", "H", "A", "T", "T", "E", "R"], answer: "REMOVE", icon: "🎩", turkish: "Şapkacı" }
                ],
                1: [ { pattern: ["C", "?", "A", "T", "T", "E", "R"], answer: "L", icon: "🍽️", turkish: "Tıkırtı" } ]
            }
        },
        {
            baseWord: "SPATTER", baseTurkish: "Sıçratmak",
            changes: {
                0: [ { pattern: ["?", "P", "A", "T", "T", "E", "R"], answer: "REMOVE", icon: "🌧️", turkish: "Pıtpıt Ses Çıkarmak" } ],
                1: [ 
                    { pattern: ["S", "?", "A", "T", "T", "E", "R"], answer: "H", icon: "⚡", turkish: "Tuzla Buz Olmak" },
                    { pattern: ["S", "?", "A", "T", "T", "E", "R"], answer: "M", icon: "🤷", turkish: "Yarım Yamalak Bilmek" }
                ]
            }
        },
        {
            baseWord: "FLATTER", baseTurkish: "Yağ Çekmek",
            changes: {
                0: [ 
                    { pattern: ["?", "L", "A", "T", "T", "E", "R"], answer: "C", icon: "🍽️", turkish: "Tıkırtı" },
                    { pattern: ["?", "L", "A", "T", "T", "E", "R"], answer: "P", icon: "🥘", turkish: "Büyük Servis Tabağı" }
                ],
                2: [ 
                    { pattern: ["F", "L", "?", "T", "T", "E", "R"], answer: "I", icon: "🦋", turkish: "Pır Pır Uçmak" },
                    { pattern: ["F", "L", "?", "T", "T", "E", "R"], answer: "U", icon: "🕊️", turkish: "Kanat Çırpmak" }
                ]
            }
        },
        {
            baseWord: "POUNDER", baseTurkish: "Ezen / Dövücü",
            changes: {
                0: [ 
                    { pattern: ["?", "O", "U", "N", "D", "E", "R"], answer: "B", icon: "😒", turkish: "Terbiyesiz Adam" },
                    { pattern: ["?", "O", "U", "N", "D", "E", "R"], answer: "F", icon: "🏗️", turkish: "Kurucu" },
                    { pattern: ["?", "O", "U", "N", "D", "E", "R"], answer: "R", icon: "⚪", turkish: "Daha Yuvarlak" },
                    { pattern: ["?", "O", "U", "N", "D", "E", "R"], answer: "S", icon: "📡", turkish: "Sinyal Cihazı" }
                ]
            }
        },
        {
            baseWord: "BLUNDER", baseTurkish: "Büyük Hata",
            changes: {
                0: [ { pattern: ["?", "L", "U", "N", "D", "E", "R"], answer: "P", icon: "🏴‍☠️", turkish: "Yağmalamak" } ],
                1: [ { pattern: ["B", "?", "U", "N", "D", "E", "R"], answer: "O", icon: "😒", turkish: "Terbiyesiz Adam" } ],
                2: [ { pattern: ["B", "L", "?", "N", "D", "E", "R"], answer: "I", icon: "🐴", turkish: "At Gözlüğü" } ]
            }
        },
        {
            baseWord: "CHOPPER", baseTurkish: "Satır / Kesici",
            changes: {
                0: [ 
                    { pattern: ["?", "H", "O", "P", "P", "E", "R"], answer: "S", icon: "🛍️", turkish: "Alışveriş Yapan Kişi" },
                    { pattern: ["?", "H", "O", "P", "P", "E", "R"], answer: "REMOVE", icon: "🦗", turkish: "Sıçrayan Böcek" }
                ],
                2: [ { pattern: ["C", "H", "?", "P", "P", "E", "R"], answer: "I", icon: "😄", turkish: "Neşeli" } ]
            }
        },
        {
            baseWord: "STICKER", baseTurkish: "Yapışkan Etiket",
            changes: {
                0: [ { pattern: ["?", "T", "I", "C", "K", "E", "R"], answer: "REMOVE", icon: "⌚", turkish: "Saat / Kalp" } ],
                1: [ 
                    { pattern: ["S", "?", "I", "C", "K", "E", "R"], answer: "L", icon: "🧥", turkish: "Yağmurluk" },
                    { pattern: ["S", "?", "I", "C", "K", "E", "R"], answer: "N", icon: "🤭", turkish: "Kıs Kıs Gülmek" }
                ]
            }
        },
        {
            baseWord: "WEATHER", baseTurkish: "Hava Durumu",
            changes: {
                0: [ 
                    { pattern: ["?", "E", "A", "T", "H", "E", "R"], answer: "F", icon: "🪶", turkish: "Tüy" },
                    { pattern: ["?", "E", "A", "T", "H", "E", "R"], answer: "H", icon: "🌿", turkish: "Süpürge Otu" },
                    { pattern: ["?", "E", "A", "T", "H", "E", "R"], answer: "L", icon: "👞", turkish: "Deri" }
                ]
            }
        },
        {
            baseWord: "STAMPER", baseTurkish: "Damgalayıcı",
            changes: {
                0: [ { pattern: ["?", "T", "A", "M", "P", "E", "R"], answer: "REMOVE", icon: "🔧", turkish: "Kurcalamak" } ],
                1: [ { pattern: ["S", "?", "A", "M", "P", "E", "R"], answer: "C", icon: "🐁", turkish: "Koşturmak" } ],
                2: [ { pattern: ["S", "T", "?", "M", "P", "E", "R"], answer: "O", icon: "🥾", turkish: "Ağır Adımla Yürüyen" } ]
            }
        }
    ]
};
