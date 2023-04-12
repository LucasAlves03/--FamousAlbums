// JavaScript
const albums = [
{ 
    id: 1,
    artist: 'Pop Smoke',
    title: 'Faith',
    year: 2021,
    cover: 'https://media.pitchfork.com/photos/60f5fc64cf762208399384b5/1:1/w_600/100000x100000-999.jpg',
    spotify: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/1982px-Spotify_icon.svg.png",
    streamingLink: "https://open.spotify.com/album/2MlT9dGKoGH2hsfcz7UUXL"
},

{ 
    id: 2,
    artist: 'Travis Scott',
    title: 'Astroworld',
    year: 2018,
    cover: 'https://townsquare.media/site/812/files/2018/07/travis-scott-astroworld-cover-art-full.jpg?w=1080&q=75',
    spotify: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/1982px-Spotify_icon.svg.png",
    streamingLink: "https://open.spotify.com/album/41GuZcammIkupMPKH2OJ6I"
},

{   id: 3,
    artist: 'Don Toliver',
    title: 'Lovesick',
    year: 2023,
    cover: 'https://i.scdn.co/image/ab67616d0000b273f5e27c2aa0b110c2b6611577',
    spotify: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/1982px-Spotify_icon.svg.png",
    streamingLink: "https://open.spotify.com/album/2Q2TRdT994vTzGE3Grmmht?si=e997fe8b96cf492c"
},

{ 
    id: 4,
    artist: 'Caio Luccas',
    title: 'Nova Moda',
    year: 2022,
    cover: 'https://i.scdn.co/image/ab67616d0000b27389049715eae2f91eb2fa9658',
    spotify: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/1982px-Spotify_icon.svg.png",
    streamingLink: "https://open.spotify.com/album/3Ne8Jl7YiQmCM4S4FdBBhN?si=8c093740969d42c6"
},

{ 
    id: 5,
    artist: 'tz da coronel',
    title: 'Gênio',
    year: 2022, 
    cover: 'https://akamai.sscdn.co/uploadfile/letras/albuns/2/d/b/f/01666984169.jpg',
    spotify: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/1982px-Spotify_icon.svg.png",
    streamingLink: "https://open.spotify.com/album/7qxeTbMYkfBe8jDdnoIY7m?si=8ddc5d84da434cca"
},

{
    id: 6, 
    artist: 'Kanye West',
    title: 'Donda',
    year: 2021, 
    cover: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Almost_black_square_020305.png',
    spotify: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/1982px-Spotify_icon.svg.png",
    streamingLink: "https://open.spotify.com/album/5CnpZV3q5BcESefcB3WJmz?si=27339c5ff7d2427e"
},

{
    id: 7,
    artist: 'Billie Eilish',
    title: 'Happier Than Ever',
    year: 2022,
    cover: 'https://upload.wikimedia.org/wikipedia/pt/e/e8/Happier_Than_Ever_%28%C3%A1lbum%29_-_Billie_Eilish.png',
    spotify: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/1982px-Spotify_icon.svg.png",
    streamingLink: "https://open.spotify.com/album/0JGOiO34nwfUdDrD612dOp?si=db50358583d147dc" 
},

{ 
    id: 8, 
    artist: 'Justin Bieber ',
    title: ' Justice',
    year: 2022, 
    cover: ' https://upload.wikimedia.org/wikipedia/pt/0/08/Justin_Bieber_-_Justice.png',
    spotify: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/1982px-Spotify_icon.svg.png",
    streamingLink: "https://open.spotify.com/album/5dGWwsZ9iB2Xc3UKR0gif2?si=41e26db7981149b5"
 },

{
    id: 9, 
    artist: 'SZA ',
    title: 'SOS ',
    year: 2022, 
    cover: ' https://upload.wikimedia.org/wikipedia/en/thumb/2/2c/SZA_-_S.O.S.png/220px-SZA_-_S.O.S.png',
    spotify: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/1982px-Spotify_icon.svg.png",
    streamingLink: "https://open.spotify.com/album/07w0rG5TETcyihsEIZR3qG?si=0f0a041c763645d9"
},

{
    id: 10, 
    artist: 'Julien Baker ', 
    title: 'Little Oblivions ',
    year: 2022,
    cover: ' https://i.scdn.co/image/ab67616d0000b2733086e90166d3c2ca266b7c67',
    spotify: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/1982px-Spotify_icon.svg.png",
    streamingLink: "https://open.spotify.com/album/3IQRHa9iVLsGlSuVHiHZ3A?si=0c4c735ff6f34495"
 },

{
    id: 11,
    artist: 'Doja Cat ',
    title: 'Planet Her ',
    year: 2022,
    cover: 'https://upload.wikimedia.org/wikipedia/pt/1/16/Planet_Her_-_Doja_Cat.png',
    spotify: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/1982px-Spotify_icon.svg.png",
    streamingLink: "https://open.spotify.com/album/4XLPYMERZZaBzkJg0mkdvO?si=1e09256804a74804"
},

{ 
    id: 12,
    artist: 'Olivia Rodrigo ',
    title: 'Sour ',
    year: 2022,
    cover: 'https://upload.wikimedia.org/wikipedia/pt/7/71/Sour_-_Olivia_Rodrigo.png',
    spotify: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/1982px-Spotify_icon.svg.png",
    streamingLink: "https://open.spotify.com/album/6s84u2TUpR3wdUv4NgKA2j?si=1ec46946c2924837"
},

{
    id: 13,
    artist: 'MC Kevin ', 
    title: ' Passado e Presente',
    year: 2021,
    cover: ' https://akamai.sscdn.co/uploadfile/letras/albuns/b/d/d/e/1083591621952151.jpg',
    spotify: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/1982px-Spotify_icon.svg.png",
    streamingLink: "https://open.spotify.com/album/5hwK2P6q7pjxahdDEobHIb?si=27f8d47b9d0d4d2a"
},

{ 
    id: 14,
    artist: 'Post Malone ',
    title: 'Hollywood’s Bleeding ',
    year: 2019,
    cover: 'https://akamai.sscdn.co/tb/letras-blog/wp-content/uploads/2021/12/8d570dc-Post-Malone-Hollywoods-Bleeding-1024x1024.jpg ',
    spotify: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/1982px-Spotify_icon.svg.png",
    streamingLink: "https://open.spotify.com/album/4g1ZRSobMefqF6nelkgibi?si=220f293721824a5d"
},

{ 
    id: 15,
    artist: ' Kendrick Lamar',
    title: 'Mr. Morale & The Big Steppers ',
    year: 2022,
    cover: ' https://akamai.sscdn.co/uploadfile/letras/albuns/7/2/6/5/01652439345.jpg',
    spotify: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/1982px-Spotify_icon.svg.png",
    streamingLink: "https://open.spotify.com/album/79ONNoS4M9tfIA1mYLBYVX?si=3097300f3860420c"
},
{
    id: 16,
    artist: "The Weeknd",
    title: "After Hours",
    year: 2020,
    cover: "https://m.media-amazon.com/images/I/813XseYNw1L._AC_SL1414_.jpg",
    spotify: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/1982px-Spotify_icon.svg.png",
    streamingLink: "https://open.spotify.com/album/4yP0hdKOZPNshxUOjY0cZj?si=75eeae423c8a4e6a"
},
{
    id: 17,
    artist: "Dua Lipa",
    title: "Future Nostalgia",
    year: 2020,
    cover: "https://imusic.b-cdn.net/images/item/original/165/0190295141165.jpg?dua-lipa-2020-future-nostalgia-french-edition-cd&class=scaled",
    spotify: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/1982px-Spotify_icon.svg.png",
    streamingLink: "https://open.spotify.com/album/7fJJK56U9fHixgO0HQkhtI?si=4d97d0e837e9411f"
},
{
    id: 18,
    artist: "Taylor Swift",
    title: "Folklore",
    year: 2020,
    cover: "https://portalpopline.com.br/wp-content/uploads/2020/08/Taylor-Swift-Folklore-novo-%C3%A1lbum.jpg",
    spotify: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/1982px-Spotify_icon.svg.png",
    streamingLink: "https://open.spotify.com/album/2fenSS68JI1h4Fo296JfGr?si=0a630fb9c0b84c10"
},
{
    id: 19,
    artist: "BTS",
    title: "Map of the Soul: 7",
    year: 2020,
    cover: "https://i.discogs.com/UVCuMf4Me7E2ttBnj0mX30i2lFSpU9_yd9tkMB1IWJU/rs:fit/g:sm/q:90/h:600/w:597/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE5MTAw/NDQzLTE2MjM0MjA4/MjUtMjE3Ny5qcGVn.jpeg",
    spotify: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/1982px-Spotify_icon.svg.png",
    streamingLink: "https://open.spotify.com/album/5W1XY5ucNATjTULERvXx9j?si=2edd4cbc0aa24105"
},
{
    id: 20,
    artist: "Billie Eilish",
    title: "When We All Fall Asleep, Where Do We Go?",
    year: 2020,
    cover: "https://upload.wikimedia.org/wikipedia/pt/8/8f/When_We_Fall_Asleep%2C_Where_Do_We_Go.png",
    spotify: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/1982px-Spotify_icon.svg.png",
    streamingLink: "https://open.spotify.com/album/0S0KGZnfBGSIssfF54WSJh?si=ed0a697a888f4dbd"
},
{
    id:21,
    artist: "Harry Styles",
    title: "Fine Line",
    year: 2020,
    cover: "https://m.media-amazon.com/images/I/61v6lSOpccL._AC_SL1500_.jpg",
    spotify: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/1982px-Spotify_icon.svg.png",
    streamingLink: "https://open.spotify.com/album/7xV2TzoaVc0ycW7fwBwAml?si=b2b8bae6f64b45a8"
},
{
    id: 22,
    artist: "Fleetwood Mac",
    title: "Rumours",
    year: 2020,
    cover: "https://upload.wikimedia.org/wikipedia/pt/f/fb/FMacRumours.PNG",
    spotify: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/1982px-Spotify_icon.svg.png",
    streamingLink: "https://open.spotify.com/album/3fBplUasp3sIiqGRonASkl?si=2ac59e6c485c498c"
    
},
{
    id: 23,
    artist: "Dababy",
    title: "Blame It on Baby",
    year: 2020,
    cover: "https://upload.wikimedia.org/wikipedia/pt/c/c2/DaBaby_-_Blame_It_on_Baby.png",
    spotify: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/1982px-Spotify_icon.svg.png",
    streamingLink: "https://open.spotify.com/album/623PL2MBg50Br5dLXC9E9e?si=5569260f0c674ab7"
},
{
    id: 24,
    artist: "Lady Gaga",
    title: "Chromatica",
    year: 2020,
    cover: "https://i.scdn.co/image/ab67616d0000b2736040effba89b9b00a6f6743a",
    spotify: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/1982px-Spotify_icon.svg.png",
    streamingLink: "https://open.spotify.com/album/05c49JgPmL4Uz2ZeqRx5SP?si=310a53252cac4c31"
},
{
    id: 25,
    artist: "Drake",
    title: "Dark Lane Demo Tapes",
    year: 2020,
    cover: "https://upload.wikimedia.org/wikipedia/en/6/6b/Drake_-_Dark_Lane_Demo_Tapes.png",
    spotify: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/1982px-Spotify_icon.svg.png",
    streamingLink: "https://open.spotify.com/album/6OQ9gBfg5EXeNAEwGSs6jK?si=4faf4a49acb14b0c"
},
{
    id: 26,
    artist: "Bad Bunny",
    title: "YHLQMDLG",
    year: 2020,
    cover: "https://upload.wikimedia.org/wikipedia/pt/3/3f/Bad_Bunny_-_Yhlqmdlg.png",
    spotify: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/1982px-Spotify_icon.svg.png",
    streamingLink: "https://open.spotify.com/album/5lJqux7orBlA1QzyiBGti1?si=82579c5cd7754eaf"
},
{
    id: 27,
    artist: "Ariana Grande",
    title: "Positions",
    year: 2020,
    cover: "https://m.media-amazon.com/images/I/71Jx3DUwN1L._AC_SL1500_.jpg",
    spotify: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/1982px-Spotify_icon.svg.png",
    streamingLink: "https://open.spotify.com/album/3euz4vS7ezKGnNSwgyvKcd?si=3a5c58bf94ec4a34"
},
{
    id: 28,
    artist: "The Strokes",
    title: "The New Abnormal",
    year: 2020,
    cover: "https://upload.wikimedia.org/wikipedia/pt/2/29/The_New_Abnormal_The_Strokes.jpg",
    spotify: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/1982px-Spotify_icon.svg.png",
    streamingLink: "https://open.spotify.com/album/2xkZV2Hl1Omi8rk2D7t5lN?si=1f4a0c6a00944c4f"
},
{
    id: 29,
    artist: "Playboi Carti",
    title: "Whole Lotta Red",
    year: 2020,
    cover: "https://upload.wikimedia.org/wikipedia/pt/6/6c/Playboi_Carti_-_Whole_Lotta_Red.png",
    spotify: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/1982px-Spotify_icon.svg.png",
    streamingLink: "https://open.spotify.com/album/2QRedhP5RmKJiJ1i8VgDGR?si=s0GJPWG1RGaaQzUQicDC6A"
  },
  {
    id: 30,
    artist: "Pop Smoke",
    title: "Meet The Woo 2",
    year: 2020,
    cover: "https://i.scdn.co/image/ab67616d0000b27362a57823eced1cb4fd93b2c1",
    spotify: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/1982px-Spotify_icon.svg.png",
    streamingLink: "https://open.spotify.com/album/4MZnolldq7ciKKlbVDzLm5?si=el47IctyReefyggr5g8FKA"
  },
  {
    id: 31,
    artist: "Travis Scott",
    title: "JACKBOYS",
    year: 2019,
    cover: "https://m.media-amazon.com/images/I/81sxAsg5+LL._AC_SL1500_.jpg",
    spotify: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/1982px-Spotify_icon.svg.png",
    streamingLink: "https://open.spotify.com/album/1Sf8GsXG32t0jNrX11xqWx?si=FxMQ34mNSlGRJcuBYXLjHg"
  },
  {
    id: 32,
    artist: "Orochi",
    title: "Vida Cara",
    year: 2023,
    cover: "https://akamai.sscdn.co/uploadfile/letras/albuns/1/9/1/7/01673348967.jpg",
    spotify: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/1982px-Spotify_icon.svg.png",
    streamingLink: "https://open.spotify.com/album/05O0Z1S7MeE49h8krhErzy?si=98Hbu44KTN2THpmT8ejenQ"
  },
  {
    id: 33,
    artist: "21 Savage",
    title: "Savage Mode II",
    year: 2020,
    cover: "https://media.pitchfork.com/photos/5f7b3ba12dd72c64377cf95b/1:1/w_600/savage%20mode%202_21%20savage%20metro%20boomin.jpg",
    spotify: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/1982px-Spotify_icon.svg.png",
    streamingLink: "https://open.spotify.com/album/6wTyGUWGCilBFZ837k5aRi?si=Bpm6rEi9TXmWJzr1Y51dyA"
  },
  {
    id: 34,
    artist: "Drake",
    title: "Her Loss",
    year: 2022,
    cover: "https://s2.glbimg.com/oVjuus8lriMkCH4GXSZiSrfBr0Y=/0x0:1440x1440/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2022/L/R/BrXYRnQ9yzJXlloABNgQ/drake-her-loss.jpg",
    spotify: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/1982px-Spotify_icon.svg.png",
    streamingLink: "https://open.spotify.com/album/5MS3MvWHJ3lOZPLiMxzOU6?si=i8-bKbaUQkORhJdr7r1GDQ"
  },
  {
    id: 35,
    artist: "50 Cent",
    title: "Get Rich Or Die Tryin'",
    year: 2003,
    cover: "https://upload.wikimedia.org/wikipedia/en/9/9d/Get_Rich_Or_Die_Tryin%27.JPG",
    spotify: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/1982px-Spotify_icon.svg.png",
    streamingLink: "https://open.spotify.com/album/5G5rgQHzdQnw32SI0WjIo5?si=c4KjQGOPTR2q__Cc-O1CgQ"
  },
  {
    id: 36,
    artist: "Migos",
    title: "Culture III",
    year: 2021,
    cover: "https://upload.wikimedia.org/wikipedia/pt/a/ae/Culture_III_-_Migos.png",
    spotify: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/1982px-Spotify_icon.svg.png",
    streamingLink: "https://open.spotify.com/album/4KdtEKjY3Gi0mKiSdy96ML?si=Rh6_T6nyQNiMJgnhnpRybA"
  },
  {
    id: 37,
    artist: "Cardi B",
    title: "Invasion of Privacy",
    year: 2018,
    cover: "https://m.media-amazon.com/images/I/81D5Okh46VL._AC_SL1425_.jpg",
    spotify: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/1982px-Spotify_icon.svg.png",
    streamingLink: "https://open.spotify.com/album/2xkZV2Hl1Omi8rk2D7t5lN?si=1f4a0c6a00944c4f"
  },
  {
    id: 38,
    artist: "A$AP Rocky",
    title: "TESTING",
    year: 2018,
    cover: "https://upload.wikimedia.org/wikipedia/en/6/6a/ASAP_Rocky_Testing.jpg",
    spotify: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/1982px-Spotify_icon.svg.png",
    streamingLink: "https://open.spotify.com/album/3MATDdrpHmQCmuOcozZjDa?si=tlJMbqueRb-TX3RF_dHc8Q"
  },
  {
    id: 39,
    artist: "YoungBoy Never Broke Again",
    title: "AI YoungBoy 2",
    year: 2019,
    cover: "https://i.scdn.co/image/ab67616d0000b273a4cba447b322609cd47fb9d3",
    spotify: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/1982px-Spotify_icon.svg.png",
    streamingLink: "https://open.spotify.com/album/1nzUj7VkiaytMmf2KrhK2L?si=Ho99aYB3Q8aqqewXF8JR_w"
  },
  {
    id: 40,
    artist: "Lil Baby",
    title: "It's Only Me",
    year: 2022,
    cover: "https://i.scdn.co/image/ab67616d0000b27366b04b41fa6f8908dce86695",
    spotify: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/1982px-Spotify_icon.svg.png",
    streamingLink: "https://open.spotify.com/album/0FYvMdfTfYJxnJnKs1wDb0?si=eNEwGYPlTS67Jt93hxAf8g"
  },
  {
    id: 41,
    artist: "Rihanna",
    title: "Loud",
    year: 2010,
    cover: "https://upload.wikimedia.org/wikipedia/pt/1/14/Rihanna_Loud.jpg",
    spotify: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/1982px-Spotify_icon.svg.png",
    streamingLink: "https://open.spotify.com/album/7vN82vd1Vq44fjlhjfvHJp?si=lc7GebJ_RoGDeZ8j2D9AiQ"
  },
  {
    id: 42,
    artist: "Anitta",
    title: "Versions of Me",
    year: 2022,
    cover: "https://is2-ssl.mzstatic.com/image/thumb/Music112/v4/04/06/95/04069522-48f9-529b-bca8-9e763d9d7a7f/093624871330.jpg/1200x1200bf-60.jpg",
    spotify: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/1982px-Spotify_icon.svg.png",
    streamingLink: "https://open.spotify.com/album/2TPl41Riu1SDbHoxhCIo2D?si=XeEIeVuUTJGmuFerbS1HYw"
  },
  {
    id: 43,
    artist: "MC Kevin o Chris",
    title: "Tamborzão Raiz",
    year: 2022,
    cover: "https://is4-ssl.mzstatic.com/image/thumb/Music112/v4/ed/36/bb/ed36bb00-30f2-7719-3840-34f21c79457d/0.jpg/1200x1200bf-60.jpg",
    spotify: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/1982px-Spotify_icon.svg.png",
    streamingLink: "https://open.spotify.com/album/7qwJFRvShWMVg39UKWafzW?si=-J5IeEQKSFqLcNMxomO-jQ"
  },
  {
    id: 44,
    artist: "Derek",
    title: "Trap The Fato",
    year: 2022,
    cover: "https://i.scdn.co/image/ab67616d0000b273ecd3c4a6471f81b9e1a9df98",
    spotify: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/1982px-Spotify_icon.svg.png",
    streamingLink: "https://open.spotify.com/album/2Gb9tOJBTIkiXfdQq1cLgo?si=vQI_W8u0SmOBCMXxgmSpAw"
  },
  {
    id: 45,
    artist: "Matuê",
    title: "Máquina do Tempo",
    year: 2020,
    cover: "https://s2.glbimg.com/4YCTQOs7a47qPX73Lm25vw3rows=/0x0:1600x1600/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/W/A/7wBV8eTXeqgitO5JASRg/capa-matue-mdt.jpg",
    spotify: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/1982px-Spotify_icon.svg.png",
    streamingLink: "https://open.spotify.com/album/6ehm0SMBBoSxH8oSrFXre6?si=Fn8iCRRtRW6RjJQIc8xMlg"
  },
  {
    id: 46,
    artist: "Metro Boomin",
    title: "HEROES & VILLAINS",
    year: 2022,
    cover: "https://i.scdn.co/image/ab67616d0000b27313e54d6687e65678d60466c2",
    spotify: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/1982px-Spotify_icon.svg.png",
    streamingLink: "https://open.spotify.com/album/7txGsnDSqVMoRl6RQ9XyZP?si=wSbY3ARyRnuomWo_F4y0FA"
  },
  {
    id: 47,
    artist: "Young Thug",
    title: "So Much Fun",
    year: 2019,
    cover: "https://media.pitchfork.com/photos/5d56cd92ffa2be0009947456/1:1/w_600/YoungThug_SoMuchFun.jpg",
    spotify: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/1982px-Spotify_icon.svg.png",
    streamingLink: "https://open.spotify.com/album/1bnHPO4dKK7IjvgrtVBcQh?si=ki7BLLPxQSGfvciB2JL1AQ"
  },
  {
    id: 48,
    artist: "Sheck Wes",
    title: "MUDBOY",
    year: 2018,
    cover: "https://media.pitchfork.com/photos/5bb635d526c20b7bcebf0d40/1:1/w_600/Sheck%20Wes_Mud%20Boy.jpg",
    spotify: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/1982px-Spotify_icon.svg.png",
    streamingLink: "https://open.spotify.com/album/15Id9Jrqab8IwHFirdrrLp?si=75SHjjIxQNmSrfAwnxWdOQ"
  },
  {
    id: 49,
    artist: "Future",
    title: "I never liked you",
    year: 2022,
    cover: "https://i.scdn.co/image/ab67616d0000b27386badd635b69aea887862214",
    spotify: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/1982px-Spotify_icon.svg.png",
    streamingLink: "https://open.spotify.com/album/6ViO9Wx6dWzeUq6DmGTaHl?si=bYVGHjHLSjutJ5B5wsNpvg"
  },
  {
    id: 50,
    artist: "Central Cee",
    title: "Wild West",
    year: 2021,
    cover: "https://i.scdn.co/image/ab67616d0000b2731675d50a0ba7919b5e5797fe",
    spotify: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/1982px-Spotify_icon.svg.png",
    streamingLink: "https://open.spotify.com/album/0aAVMtHuK9wX1mQozWvdSZ?si=_ffeor51Rr-Hmyu813KzaA"
  },
  {
    id: 51,
    artist: "MC Hariel",
    title: "1 Beat 1 letra",
    year: 2022,
    cover: "https://akamai.sscdn.co/uploadfile/letras/albuns/0/0/a/d/01671192323.jpg",
    spotify: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/1982px-Spotify_icon.svg.png",
    streamingLink: "https://open.spotify.com/album/2GjSmvspkIe32HTVw8rpOS?si=3egOAhf6S-G3c1dbrUVUdQ"
  },
  {
    id: 52,
    artist: "Brandão85",
    title: "Zoo",
    year: 2022,
    cover: "https://images.genius.com/549adc962b4cd2bc231beb02ca336572.1000x1000x1.jpg",
    spotify: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/1982px-Spotify_icon.svg.png",
    streamingLink: "https://open.spotify.com/album/3jqd57ft9JoXiJnIJreNHb?si=yrHs1eNcR22JEPMLM_N2PQ"
  },
  {
    id: 53,
    artist: "Veigh",
    title: "Dos Prédios",
    year: 2022,
    cover: "https://rapforte.com/wp-content/uploads/2022/11/veigh-1.jpg",
    spotify: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/1982px-Spotify_icon.svg.png",
    streamingLink: "https://open.spotify.com/album/7ARyKbobUo0oE30Arwe67d?si=gKFv5cw_QKy-D3O5uwdJqw"
  }
  
];

const albumCards = document.getElementById('album-cards');
const searchBtn = document.getElementById('search-btn');

searchBtn.addEventListener('click', () => {
const searchInput = document.getElementById('search');
const searchTerm = searchInput.value.toLowerCase();
const filteredAlbums = albums.filter(album => album.title.toLowerCase().includes(searchTerm));
albumCards.innerHTML = '';

filteredAlbums.forEach(album => {
const card = `
    <div class="card">
        <img class="cover" src="${album.cover}" alt="${album.title}">
        <div class="artist">${album.artist}</div>
        <div class="title">${album.title}</div>
        <div class="year">${album.year}</div>
        <a href="${album.streamingLink}" target="_blank"><img src="${album.spotify}" alt="" class="spotify"></a>
    </div> `;
    albumCards.innerHTML += card;
    });
});
