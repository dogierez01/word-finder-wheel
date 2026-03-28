// words.js - No-Cognate & Turkish Base Meaning Edition

const wordDatabase = {
    3: [
        // Family 1: BAT
        {
            baseWord: "BAT",
            baseTurkish: "Yarasa / Sopa",
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
                1: [ 
                    { pattern: ["B", "?", "T"], answer: "U", icon: "🤔", turkish: "Ama / Fakat" }
                ],
                2: [ 
                    { pattern: ["B", "A", "?"], answer: "D", icon: "👎", turkish: "Kötü" },
                    { pattern: ["B", "A", "?"], answer: "G", icon: "👜", turkish: "Çanta" },
                    { pattern: ["B", "A", "?"], answer: "N", icon: "🚫", turkish: "Yasak" },
                    { pattern: ["B", "A", "?"], answer: "R", icon: "🍫", turkish: "Çubuk / Kalıp" }
                ]
            }
        },
        // Family 2: PAN
        {
            baseWord: "PAN",
            baseTurkish: "Tava",
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
        // Family 3: POT
        {
            baseWord: "POT",
            baseTurkish: "Tencere / Demlik",
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
        // Family 4: BUG
        {
            baseWord: "BUG",
            baseTurkish: "Böcek",
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
        // Family 5: TIP
        {
            baseWord: "TIP",
            baseTurkish: "Uç / İpucu / Bahşiş",
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
        // Family 6: NET
        {
            baseWord: "NET",
            baseTurkish: "Ağ",
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
                1: [
                    { pattern: ["N", "?", "T"], answer: "U", icon: "🥜", turkish: "Kuruyemiş" }
                ],
                2: [
                    { pattern: ["N", "E", "?"], answer: "W", icon: "✨", turkish: "Yeni" }
                ]
            }
        },
        // Family 7: FIN
        {
            baseWord: "FIN",
            baseTurkish: "Yüzgeç",
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
        // Family 8: CAP
        {
            baseWord: "CAP",
            baseTurkish: "Kasket / Kapak",
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
        // Family 9: HOP
        {
            baseWord: "HOP",
            baseTurkish: "Sıçramak",
            changes: {
                0: [
                    { pattern: ["?", "O", "P"], answer: "C", icon: "👮", turkish: "Polis" },
                    { pattern: ["?", "O", "P"], answer: "M", icon: "🧹", turkish: "Paspas" },
                    { pattern: ["?", "O", "P"], answer: "P", icon: "💥", turkish: "Patlamak" },
                    { pattern: ["?", "O", "P"], answer: "T", icon: "🔝", turkish: "Üst" }
                ],
                1: [
                    { pattern: ["H", "?", "P"], answer: "I", icon: "🦴", turkish: "Kalça" }
                ],
                2: [
                    { pattern: ["H", "O", "?"], answer: "G", icon: "🐖", turkish: "Domuz" },
                    { pattern: ["H", "O", "?"], answer: "T", icon: "🥵", turkish: "Sıcak" },
                    { pattern: ["H", "O", "?"], answer: "W", icon: "❓", turkish: "Nasıl" }
                ]
            }
        },
        // Family 10: MAD
        {
            baseWord: "MAD",
            baseTurkish: "Kızgın / Deli",
            changes: {
                0: [
                    { pattern: ["?", "A", "D"], answer: "B", icon: "👎", turkish: "Kötü" },
                    { pattern: ["?", "A", "D"], answer: "D", icon: "👨‍👧", turkish: "Baba" },
                    { pattern: ["?", "A", "D"], answer: "F", icon: "🕶️", turkish: "Geçici Moda / Heves" },
                    { pattern: ["?", "A", "D"], answer: "P", icon: "📝", turkish: "Bloknot / Altlık" },
                    { pattern: ["?", "A", "D"], answer: "S", icon: "😢", turkish: "Üzgün" }
                ],
                1: [
                    { pattern: ["M", "?", "D"], answer: "U", icon: "💩", turkish: "Çamur" }
                ],
                2: [
                    { pattern: ["M", "A", "?"], answer: "C", icon: "🧥", turkish: "Yağmurluk" },
                    { pattern: ["M", "A", "?"], answer: "N", icon: "👨", turkish: "Adam" },
                    { pattern: ["M", "A", "?"], answer: "P", icon: "🗺️", turkish: "Harita" },
                    { pattern: ["M", "A", "?"], answer: "T", icon: "🚪", turkish: "Paspas" },
                    { pattern: ["M", "A", "?"], answer: "W", icon: "👄", turkish: "Hayvan Ağzı / Mide" }
                ]
            }
        },
        // Family 11: TEN
        {
            baseWord: "TEN",
            baseTurkish: "On",
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
                2: [
                    { pattern: ["T", "E", "?"], answer: "A", icon: "🍵", turkish: "Çay" }
                ]
            }
        },
        // Family 12: LOG
        {
            baseWord: "LOG",
            baseTurkish: "Kütük / Tomruk",
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
        // Family 13: SUN
        {
            baseWord: "SUN",
            baseTurkish: "Güneş",
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
        // Family 14: CUT
        {
            baseWord: "CUT",
            baseTurkish: "Kesmek",
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
        // Family 15: RED
        {
            baseWord: "RED",
            baseTurkish: "Kırmızı",
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
                2: [
                    { pattern: ["R", "E", "?"], answer: "F", icon: "⚽", turkish: "Hakem" }
                ]
            }
        }
    ],
    
    // Ready for the 4-letter families whenever you are!
    4: [],
    5: [],
    6: []
};
