const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = "-";
console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
console.log('         [Wait please .. ]       ')
console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
client.on('ready', () => {
	console.log('')
	console.log('')
	console.log('')
	console.log('')
	console.log('')
	console.log('')
	console.log('')
	console.log('')
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
  console.log(`Logged in as [ ${client.user.tag}! ]`);
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
  console.log('[           BOT IS ONLINE         ]')
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
  console.log('[        info         ]')
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
  client.user.setStatus(`dnd`)
});


client.on('message', msg =>{
    if(msg.content === `${prefix}ping`) {
    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTitle("Bot Ping!!")
    .setDescription(`${client.ping} ms`)
	msg.channel.send(embed);
    }
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
 client.user.setGame("-Help By Sijar", "https://www.twitch.tv/Alpha");
});
 client.on('message', function(msg) {
    if(msg.content.startsWith (prefix  + 'server')) {
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .setTitle(`__**ServerInfo**__`)
      .addField('**اسم السيرفر**',`[** __${msg.guild.name}__ **]`,true)
      .addField('**نوع السيرفر**',`[** __${msg.guild.region}__ **]`,true)
      .addField('**عدد الاعضاء**',`[** __${msg.guild.memberCount}__ **]`,true)
      .addField('**عدد البشريين**',`[** __${msg.guild.memberCount - msg.guild.members.filter(m => m.user.bot).size}__ **]`,true)
      .addField('**عدد البوتات**',`[** __${msg.guild.members.filter(m => m.user.bot).size}__ **]`,true)
      .addField('**عدد الاعضاء الاونلاين**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
      .addField('**الرومات**',`[**${msg.guild.channels.filter(m => m.type === 'text').size}** **text | Voice** **${msg.guild.channels.filter(m => m.type === 'voice').size}**]`,true)
      .addField('**الأونـر**',`**${msg.guild.owner}**`,true)
      .addField('**ايدي السيرفر**',`[** __${msg.guild.id}__ **]`,true)
      .addField('**الرتب**',`[** __${msg.guild.roles.size}__ **]`,true)
      .addField('**تاريخ انشاء السيرفر**',`[** __${msg.guild.createdAt.toLocaleString()}__ **]`, true)
      msg.channel.send({embed:embed});
    }
  });    




client.on('message', message => {
  if(message.content.includes("<@BOT ID>")){
    message.channel.startTyping();
    message.channel.stopTyping();
  }
});




client.on('message' , message => {
      var prefix = "-";
      if(message.author.bot) return;
     
      if(message.content.startsWith(prefix + "bc")) {
        if (!message.member.hasPermission("ADMINISTRATOR"))  return;
        let args = message.content.split(" ").slice(2);
     var codes = args.join(' ')
       
        if(!codes) {
          message.channel.send("قم بكتابة الرسالة ")
            return;
        }
     
     
              var role = message.mentions.roles.first();
                if(!role) {
                  message.reply("لا توجد رتبة بهذا الاسم")
                    return;
                }
        }
    });








client.on('message', message => {
  if (message.author.bot) return;
   if (message.content === prefix + "help") {
    if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );




message.author.sendMessage(`
**
[❖═════ مرحبا بك في بوت برو لو  ═══════❖]
[❖═════════════════════════════❖]
        بوت برو لو يتميز بـــ
1- :rocket: سرعه اتصال ممتازه
2- :beginner: سهل الاستخدام
3- :warning: صيانه يوميه
4- :money_with_wings: مجاني بالكامل
5- :shield: يحتوي على مانع اختراق سيرفرات للحفاظ على امان سيرفرك
6- :musical_note: يحتوي على خاصيه ميوزك بجوده عاليه
[❖═════════════════════════════❖]
التحديثات
1- اضافة نظام الكريدت
2- اضافة نظام الموسيقة كامل
3- حماية كاملة
4- تحديث جميع الانظمة
5- نظام الورن كا برو بوت
6- وانظمة اخري ♥
**`);

  }
});









 
 client.on("message", message => {
                      if(message.content === 'رابط' ) {
						  message.channel.send('**تم ارسال الرابط الي الخاص بك 😉**').then(msg => {
						  
						  });
                        message.channel.createInvite({
                        thing: true,
                        maxUses: 10,
                        maxAge: 86400
                        }).then(invite =>
       
							   message.author.sendMessage(invite.url)
							  
                             )						 
					}});
 
client.login('NjEwNDE5OTcwNDE2ODM2NjIw.XVFAPQ.L-qCoy1XWp41vtGUHVi17NmCetU');