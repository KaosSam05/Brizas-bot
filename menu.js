const help = (p, date, user, wame) => {
return `
╭━━━━━━━━━━━━━━━━━━━╮
┃☄️✨Reykers Bot✨☄️
┃  
┃ 🕐 𝐃𝐚𝐭𝐚 𝐞 𝐡𝐨𝐫𝐚: ${date}
┃ 🙂 𝐔𝐬𝐮𝐚́𝐫𝐢𝐨: ${user}
┃ 🌎 𝐖𝐚𝐦𝐞: 
┃ ${wame}                                       
┃
┣━━ 🤩 REDES SOCIALES🤩 ━╮
┃
┃ 📷 𝐈𝐧𝐬𝐭𝐚𝐠𝐫𝐚𝐦: @_samuelgaanss
┃
┃ 🤖𝐆𝐢𝐭𝐡𝐮𝐛:
┃ 🌐https://github.com/KaosSam05
┃
┃
┃ 📹𝐘𝐨𝐮𝐭𝐮𝐛𝐞:
┃ 🌐
┃
┃
┣━━━⚡ PRINCIPAL ⚡━━━╮
┃ ${p}listblockcmd
┃ ${p}listpalavra
┃ ${p}info
┃ ${p}del
┃ ${p}delete
┃ ${p}ajuda
┃ ${p}help
┃ ${p}oficialcrador
┃ ${p}comandos
┃ ${p}menulite
┃ ${p}menu
┃ ${p}ping
┃ ${p}destrava
┃ ${p}sugerircmd (txt)
┃ ${p}blocklist
┃ ${p}blacklist
┃ ${p}creador
┃ ${p}toimg (leg, resp img)
┣━━━━✨ STICKER ✨━━━━╮
┃ ${p}stiker (leg, resp img)
┃ ${p}sticker (leg, resp img)
┃ ${p}csticker (leg, resp img)
┃ ${p}cstiker (leg, resp img)
┃ ${p}fstiker (leg, resp img)
┃ ${p}fsticker (leg, resp img)
┃ ${p}nstiker (pack) (author)
┃ ${p}nsticker (pack) (author)
┃ ${p}nfstiker (pack) (author)
┃ ${p}nfsticker (pack) (author)
┃ ${p}nfsticker (pack) (author)
┃ ${p}rename (pack) (author)
┣━━━━😎 CREADOR 😎━━━━╮
┃ ${p}blockcmd (cmd sem prefix)
┃ ${p}unblockcmd (cmd sem prefix)
┃ ${p}alerta (txt)
┃ ${p}antinewchat (1 or 0)
┃ ${p}antispamcmd (1 or 0)
┃ ${p}antipv (1 or 0)
┃ ${p}antinewchat (1 or 0)
┃ ${p}infinityblock (1 or 0)
┃ ${p}antiligar (1 or 0)
┃ ${p}addpalavra (txt)
┃ ${p}rmpalavra (txt)
┃ ${p}limparchat (txt)
┃ ${p}ataque (txt)
┃ ${p}divulgar (txt)
┃ ${p}entrargp (txt)
┃ ${p}block (num)
┃ ${p}unblock (num)
┃ ${p}msginfo
┃ ${p}chatinfo
┣━━━━🗳️ VOTO 🗳️━━━━╮
┃ ${p}votohelp
┃ ${p}votoinit
┃ ${p}clearvoto
┃ ${p}votostatus
┃ ${p}voto
┃ ${p}votofinish
┃ ${p}gpvotohelp
┃ ${p}gpvotoinit
┃ ${p}gpclearvoto
┃ ${p}gpvotostatus
┃ ${p}gpvoto
┃ ${p}gpvotofinish
┣━━━🙋‍♂️ BIENVENÍDAS 🙋‍♂️━━━╮
┃ ${p}byeadd (texto)
┃ ${p}welcomeadd (texto)
┃ ${p}welcomehelp
┣━━━━━⏱️ CONTADOR ⏱️━━━━━╮
┃ ${p}checkativo (dial)
┃ ${p}rankativo
┃ ${p}atividade
┃ ${p}filtroativo
┃ ${p}banativos
┣━━━━━🔇 MUTEAR 🔇━━━━━╮
┃ ${p}mute (marcar)
┃ ${p}desmute (marcar)
┃ ${p}mutados
┣━━━━━💫 NIVEL 💫━━━━━╮
┃ ${p}deletelevel
┃ ${p}level (n/a, num)
┃ ${p}registerlevel
┣━━━━🎮 GAMES XP 🎮━━━━╮
┃ ${p}jogatina (1 or 0)
┃ ${p}stealrandom 
┃ ${p}steal (dial number)
┃ ${p}cassino 
┃ ${p}flip 
┃ ${p}doarxp (xp) (dial number) 
┃ ${p}roletarandom
┃ ${p}roletaneg
┃ ${p}roletapos
┃ ${p}flip 
┣━━━━━⏳ LIMITES ⏳━━━━╮
┃ ${p}rmlimituser
┃ ${p}resetlimit
┃ ${p}limitcmd (1 or 0)
┃ ${p}mylimit
┣━━━━━❌ ANTI ❌━━━━━╮
┃ ${p}antidoc (1 or 0)
┃ ${p}antiloc (1 or 0)
┃ ${p}antiimg (1 or 0)
┃ ${p}antipalavra (1 or 0)
┃ ${p}antivideo (1 or 0)
┃ ${p}antisticker (1 or 0)
┃ ${p}antiaudio (1 or 0)
┃ ${p}antictt (1 or 0)
┃ ${p}antilink (1 or 0)
┃ ${p}antiporn (1 or 0)
┃ ${p}antifake (1 or 0)
┃ ${p}dontback (1 or 0)
┃ ${p}antilinkhard (1 or 0)
┣━━━━👥 GRUPOS 👥━━━╮
┃ ${p}listfake
┃ ${p}listbr
┃ ${p}listddd (country code)
┃ ${p}dbackadd (num)
┃ ${p}dbackrm (num)
┃ ${p}fechargp
┃ ${p}mudardesc
┃ ${p}mudarnome
┃ ${p}abrirgp
┃ ${p}linkgroup
┃ ${p}listadmin
┃ ${p}listonline
┃ ${p}leave
┃ ${p}kick (dial num)
┃ ${p}ban (resp msg)
┃ ${p}promote (dial num)
┃ ${p}demote (dial num)
┃ ${p}add (num)
┃ ${p}roletrussablock (1 or 0)
┃ ${p}welcome (1 or 0)
┃ ${p}simih (1 or 0)
┃ ${p}autostickerimg (1 or 0)
┃ ${p}onmodgrupo
┃ ${p}offmodgrupo
┃ ${p}autoreply (1 or 0)
┃ ${p}marcar
┃ ${p}marcar2
┃ ${p}marcar3
┃ ${p}hidemarcar (txt)
┣━━💥 RULETA RUSA 💥━━╮
┃ ${p}helproleta
┃ ${p}roletarussahard
┃ ${p}roletarussamed
┃ ${p}roletarussaeasy
┃ ${p}roletarussapac
┣━#️⃣ JUEGO DE LA ABUELA #️⃣━╮
┃ ${p}ttt (dificulty)
┃ ${p}coord (coordenada)
┃ ${p}tttme
┃ ${p}tttrank
┃ ${p}ttthelp
┃ ${p}delttc
┃ ${p}tictactoe
┣━━━━━🎥 VIDEO 🎥━━━━╮
┃ ${p}bold (txt)
┃ ${p}poly (txt)
┃ ${p}glowing (txt)
┃ ${p}colorful (txt)
┃ ${p}army (txt)
┃ ${p}retro (txt)
┃ ${p}frame (sec) (resp video)
┃ ${p}mute (resp video)
┃ ${p}rapidovid (resp video)
┃ ${p}lentovid (resp video)
┃ ${p}togif (resp video)
┃ ${p}resizevid (lag) (alt) (resp vid)
┣━━━━━🎨 LOGOS 🎨━━━━╮
┃ ${p}nulis (txt)
┃ ${p}undgrass (txt)
┃ ${p}love (txt)
┃ ${p}coffe (txt)
┃ ${p}coffe2 (txt)
┃ ${p}cemitery (txt)
┃ ${p}gradient (txt)
┃ ${p}glowing (txt)
┃ ${p}shinerainbow (txt)
┃ ${p}graffiti (txt)
┃ ${p}neonpink (txt)
┃ ${p}neonrainbow (txt)
┃ ${p}neongreen (txt)
┃ ${p}neonblue (txt)
┃ ${p}neonyellow (txt)
┃ ${p}neonsky (txt)
┃ ${p}flowerlogo (txt)
┃ ${p}matrixlogo (txt)
┃ ${p}thunderlogo (txt)
┃ ${p}silverplaca (txt)
┃ ${p}goldplaca (txt)
┃ ${p}narutologo (txt)
┃ ${p}phlogo (t1) | (t2)
┃ ${p}mineconquista (t1) | (t2)
┃ ${p}glitch (t1) | (t2)
┃ ${p}ravetxt (t1) | (t2)
┃ ${p}woodtxt (t1) | (t2)
┃ ${p}neon (t1) | (t2)
┃ ${p}sunset (t1) | (t2)
┃ ${p}gimage (txt)
┃ ${p}whatis (txt)
┃ ${p}txt3d (txt)
┣━━━━━📷 FOTOS 📷━━━━╮
┃ ${p}backremove (leg, resp img)
┃ ${p}cropimg (lag) (alt) (resp img)
┃ ${p}bwimg (resp img)
┃ ${p}emoji (emoji)
┃ ${p}identifyimg (resp img)
┃ ${p}monochromeimg (resp img)
┃ ${p}resizeimg (lag) (alt) (resp img)
┃ ${p}blurimg (rad) (sig) (resp img)
┣━━⏳ CONTAR ⏳━━╮
┃ ${p}halloween (ano)
┃ ${p}kidday (ano)
┃ ${p}motherday (ano)
┃ ${p}fatherday (ano)
┃ ${p}carnaval (ano)
┃ ${p}republic (ano)
┃ ${p}goodfriday (ano)
┃ ${p}finados (ano)
┃ ${p}ourlady (ano)
┃ ${p}independence (ano)
┃ ${p}workday (ano)
┃ ${p}tiradentes (ano)
┃ ${p}pascoa (ano)
┃ ${p}natal (ano)
┃ ${p}anonovo
┣━━━━🗣️  VOZ MODERADOR 🗣️━━━━╮
┃ ${p}esquilo (resp audio)
┃ ${p}grave (resp audio)
┃ ${p}estourar (resp audio)
┃ ${p}rapidoaudio (resp audio)
┃ ${p}lentoaudio (resp audio)
┃ ${p}bass (resp audio)
┣━━━━━🎵 AUDIO 🎵━━━╮
┃ ${p}shazam (resp audio)
┃ ${p}gtts (la) (txt)
┃ ${p}playlist
┃ ${p}lyrics
┃ ${p}ptlyrics
┃ ${p}play (music name)
┃ ${p}playv2 (music name)
┃ ${p}tomp3 (cap, resp vid)
┃ ${p}ytsrc (name)
┃ ${p}ytmp4 (yt url)
┃ ${p}ytmp3 (yt url)
┣━━━⚙️ GENERADOR ⚙️━━━━╮
┃ ${p}fancy (txt)
┃ ${p}gpessoa
┃ ${p}gendereco
┃ ${p}gcnh
┃ ${p}geleitortitulo
┃ ${p}gbanco
┃ ${p}gcarro
┃ ${p}gpass (letras n)
┃ ${p}cpf
┃ ${p}ddd (ddd)
┃ ${p}cep (cep)
┃ ${p}gprocesso
┣━━━━━━🧾 TEXTO 🧾━━━━╮
┃ ${p}nameninja (name)
┃ ${p}fakeidentity
┃ ${p}installbot
┃ ${p}traduz (la) (txt)
┃ ${p}wame
┃ ${p}repeat (txt)
┃ ${p}ocr (leg, resp img)
┃ ${p}nethunter
┃ ${p}idioma
┃ ${p}frase
┃ ${p}wppim
┃ ${p}db
┣━━━👾 CODIGOS 👾━━━╮
┃ ${p}txtomorse (txt)
┃ ${p}morsetotxt (txt)
┃ ${p}ebinary (txt)
┃ ${p}dbinary (txt)
┣━━━━🏆 RANKS 🏆━━━╮
┃ ${p}ranklindo
┃ ${p}rankfeo
┃ ${p}rankgado
┃ ${p}rankcomu
┃ ${p}ranknazi
┃ ${p}rankqi
┃ ${p}rankfofo
┣━━━🔮 PREVIONES 🔮━━╮
┃ ${p}ship (num1) (num2)
┃ ${p}corno (num1)
┃ ${p}nazista (num1)
┃ ${p}comunista (num1)
┃ ${p}dado
┃ ${p}gay (num1)
┃ ${p}qi (num1)
┃ ${p}seudia (num1)
┃ ${p}feio (num1)
┃ ${p}bv (num1)
┃ ${p}gado (num1)
┃ ${p}gostoso (num1)
┃ ${p}gostosa (num1)
┃ ${p}randomship (n1, n/a)
┣━━━━📱 QR CODE 📱━━━━╮
┃ ${p}qrcode (txt)
┃ ${p}qrcodebg (txt)
┃ ${p}qrcodegb (txt)
┃ ${p}qrcodebb (txt)
┃ ${p}qrcodebb1 (txt)
┃ ${p}qrcoderb (txt)
┃ ${p}qrcodebr (txt)
┣━━━━🕵️ STALKER 🕵️━━━╮
┃ ${p}instastalk (name)
┃ ${p}githubstalk (name)
┃ ${p}tiktokstalk (name)
┣━━━━😝 DIVERSION 😝━━━╮
┃ ${p}papel
┃ ${p}piedra
┃ ${p}tijeras
┃ ${p}casino
┃ ${p}meme
┃ ${p}meme
┃ ${p}darkjokes
┣━━━━💱 MONEDA 💱━━━━━╮
┃ ${p}dolarhoje
┃ ${p}rublohoje
┃ ${p}ienehoje
┃ ${p}librahoje
┃ ${p}bitcoinhoje
┃ ${p}realhoje
┃ ${p}cvoin (c1)|(c2)
┃ ${p}ccoin (c1)|(c2)|(num)
╰━━━━━━━━━━━━━━━━━━━╯`
}

exports.help = help
