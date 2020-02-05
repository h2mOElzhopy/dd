const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});

app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://kahxxx.glitch.me/`);
}, 280000);



const Discord = require("discord.js");
const { Client, RichEmbed } = require('discord.js');
var { Util } = require('discord.js');
const fs = require("fs");
const client = new Discord.Client();
const bot = new Discord.Client();
const botname = "Earth Bot";
const ms = require("ms");
const moment = require("moment");
const jimp = require ("jimp");
const pretty = require("pretty-ms");
const canvas = require("canvas");
const Canvas = require("canvas");
const fetchVideoInfo = require("youtube-info");
const simpleytapi = require('simple-youtube-api')
const YouTube = require('simple-youtube-api');
const youtube = new YouTube('AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8');
const getYoutubeID = require('get-youtube-id');
const util = require("util");
const queue = new Map();
const enmap = require('enmap');
const ytdl = require("ytdl-core");
// ===================== [ # Settings ] ======================= //
const prefix = "#";
const logroom = "log";
const inviteDIS = "";
// ===================== [ # END Settings ] ======================= //


function forEachObject(obj, func) {
  Object.keys(obj).forEach(function(key) {
    func(key, obj[key]);
var dat = JSON.parse("{}");
  });
}


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});




      client.on("message", message => {
    if (message.content.toLowerCase() === prefix + "help") {
        message.delete(5000)
        if(!message.channel.guild) return;
        const e = new Discord.RichEmbed()
        .setColor('#36393e')
        .setTitle('Check Your DM’s')
     const embed = new Discord.RichEmbed()
         .setColor('#36393e')
         .setTitle('Click To Join Support Server')
         .setURL(`https://discord.gg/${inviteDIS}`)
         .setDescription(`**
         \`\`\` • ⊃ | Securite Command :\`\`\`   

     » ${prefix}settings postblck on/off لتشغيل او اطفأ مانع النشر
     » ${prefix}settings limitsban لتحديد اقص الباند 
     » ${prefix}settings limitskick لتحديد اقصي الطرد 
     » ${prefix}settings limitsroleD لتحديد اقصي مسح رتب 
     » ${prefix}settings limitsroleC لتحديد اقصي عمل رولات 
     » ${prefix}settings limitschannelD لتحديد اقصي مسح رومات
     » ${prefix}settings limitstime لتحديد الوقت لنزع الرتبه من الهكر
     » ${prefix}settings antifake on/off لتشغيل او اطفأ مانع الحسابات الوهمية
     » ${prefix}settings dateAC لتحديد مده الحساب الوهمي
**`)
   message.channel.send(e).then(m => m.delete(5000))
   message.author.sendEmbed(embed).catch(error => message.reply('Your DM’s is CLosed'))
   
   }
   });

client.on('message', message => {
  
    if(message.content === prefix +'settings postblck'){
        message.channel.send(`**» ${prefix}settings postblck on/off لتشغيل او اطفأ مانع النشر**`)
    }
});

client.on('message', message => {
  
    if(message.content === prefix +'settings antifake'){
        message.channel.send(`**» #settings antifake on/off لتشغيل او اطفأ مانع الحسابات الوهمية**`)
    }
});



client.on("message", message => {
  if (message.content.startsWith(prefix + "bans")) {
    message.guild
      .fetchBans()
      .then(bans =>
        message.channel.send(`${bans.size} عدد اشخاص المبندة من السيرفر `)
      )
      .catch(console.error);
  }
});

client.on("message", async message => {
  if (message.content.startsWith(prefix + "banlist")) {
    if (!message.guild) return;
    if (!message.member.hasPermission("BAN_MEMBERS"))
      return message.channel.send(
        "**Sorry But You Dont Have Permission** `BAN_MEMBERS`"
      );
    message.guild.fetchBans().then(bans => {
      let b = bans.size;
      let bb = bans.map(a => `${a}`).join(" - ");
      message.channel.send(`** ${b} | ${bb}**`);
    });
  }
});

let antifake = JSON.parse(fs.readFileSync('./antifake.json' , 'utf8'));

client.on('message', message => {
    if(message.content.startsWith(prefix + "settings antifake on")) {
        if(!message.channel.guild) return message.reply('** :no_mouth: هذا الامر مخصص للسيرفرات **');
        if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('**You must have*** `MANAGE_GUILD`' );
antifake[message.guild.id] = {
onoff: 'On',
}
     const embed = new Discord.RichEmbed()
         .setColor('#36393e')
         .setTitle(' ANTI - FakeACCOUNTS ')
         .setURL(`https://discord.gg/${inviteDIS}`)
         .setThumbnail(message.author.avatarURL)
         .setFooter(`${client.user.username} - Code By : Kahrbaa`)
         .setDescription(`**
         \`\`\` الـخاصية تعمل ✔️ \`\`\`         
**`)
message.channel.send(embed)
          fs.writeFile("./antifake.json", JSON.stringify(antifake), (err) => {
            if (err) return console.error(err)
            .catch(err => {
              console.error(err);
          });
            });
          }
 
        })
 
 
 
client.on('message', message => {
    if(message.content.startsWith(prefix + "settings antifake off")) {
        if(!message.channel.guild) return message.reply('** :no_mouth: هذا الامر مخصص للسيرفرات **');
        if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('**You must have** `MANAGE_GUILD`' );
antifake[message.guild.id] = {
onoff: 'Off',
}
     const embed = new Discord.RichEmbed()
         .setColor('#36393e')
         .setTitle(' ANTI - FakeACCOUNTS ')
         .setURL(`https://discord.gg/${inviteDIS}`)
         .setThumbnail(message.author.avatarURL)
         .setFooter(`${client.user.username} - Code By : Kahrbaa`)
         .setDescription(`**
         \`\`\` الـخاصية توقفت ✖️ \`\`\`         
**`)
message.channel.send(embed)
          fs.writeFile("./antifake.json", JSON.stringify(antifake), (err) => {
            if (err) return console.error(err)
            .catch(err => {
              console.error(err);
          });
            });
          }
 
        })
         client.on('message', message => {
          if (!message.channel.guild) return;
 
 
   if(message.content.startsWith(prefix + "settings dateAC")) {
         let time = message.content.split(" ").slice(2).join(" ");
        if(!message.channel.guild) return message.reply('** :no_mouth: هذا الامر مخصص للسيرفرات **');
        if (!time) return message.channel.send('**يرجي كتابة مدة الحساب الوهمي بـ [الايام]**');
            if (isNaN(time)) return message.channel.send("** المدة بـ الارقام [الايام]! **");
       if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('**You must have** `MANAGE_GUILD`' );
     const embed = new Discord.RichEmbed()
         .setColor('#36393e')
         .setTitle('Click To Join Support Server')
         .setURL(`https://discord.gg/${inviteDIS}`)
         .setThumbnail(message.author.avatarURL)
         .setFooter(`${client.user.username} - Code By : Kahrbaa`)
         .setDescription(`**
         \`\`\` • ⚠️ | خـاصية منع الحسابات الوهمية \`\`\`         
    
          Account Date : __${time}__ . 
          By : __${message.author}__ .


  ♾  __ اوامر خاصية مانع الحسابات الوهمية __
 ${prefix}settings antifake on/off لتشغيل او اطفأ مانع الحسابات الوهمية 
 ${prefix}settings dateAC لتحديد مده الحساب الوهمي  
**`)
message.channel.sendEmbed(embed)
antifake[message.guild.id] = {
created: time,
onoff: 'On',
}
fs.writeFile("./antifake.json", JSON.stringify(antifake), (err) => {
if (err) console.error(err)
})
   }})

client.on("guildMemberAdd", async member => {
  if(!antifake[member.guild.id]) antifake[member.guild.id] = {
    onoff: 'Off'
  }
  if(antifake[member.guild.id].onoff === 'Off') return;
  if(!member.user.bot) return;
    let accounttime = `${antifake[member.guild.id].created}`
    let moment2 = require('moment-duration-format'),
        moment = require("moment"),
        date = moment.duration(new Date() - member.user.createdAt).format("d");
 
    if(date < accounttime) {
      member.ban(`يجب ان يكون عمر الحسبات اقل من  ${antifake[member.guild.id].created} يوما.`)
    }
  });

       
let spread = JSON.parse(fs.readFileSync('./postblck.json' , 'utf8'));
client.on('message', message => {
    if(message.content.startsWith(prefix + "settings postblck off")) {
        if(!message.channel.guild) return message.reply('** :no_mouth: هذا الامر مخصص للسيرفرات **');
spread[message.guild.id] = {
onoff: 'Off',
}
     const embed = new Discord.RichEmbed()
         .setColor('#36393e')
         .setTitle('◾️ Post Blocking ◾️')
         .setURL(`https://discord.gg/${inviteDIS}`)
         .setThumbnail(message.author.avatarURL)
         .setFooter(`${client.user.username} - Code By : Kahrbaa`)
         .setDescription(`**
         \`\`\` الـخاصية توقفت ✖️ \`\`\`         
**`)
message.channel.send(embed)
          fs.writeFile("./postblck.json", JSON.stringify(spread), (err) => {
            if (err) console.error(err)
            .catch(err => {
              console.error(err);
          });
            });
          }
 
        })
        client.on('message', message => {

    if(message.content.startsWith(prefix + "settings postblck on")) {

        if(!message.channel.guild) return message.reply('** :no_mouth: هذا الامر مخصص للسيرفرات **');
spread[message.guild.id] = {
onoff: 'On',
}
     const embed = new Discord.RichEmbed()
         .setColor('#36393e')
         .setTitle('◾️ Post Blocking ◾️')
         .setURL(`https://discord.gg/${inviteDIS}`)
         .setThumbnail(message.author.avatarURL)
         .setFooter(`${client.user.username} - Code By : Kahrbaa`)
         .setDescription(`**
         \`\`\` الـخاصية تعمل ✔️ \`\`\`         
**`)
message.channel.send(embed)
          fs.writeFile("./postblck.json", JSON.stringify(spread), (err) => {
            if (err) console.error(err)
            .catch(err => {
              console.error(err);
          });
            });
          }
 
        })
 

client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('https://www.discordapp.com/')){

            if(!spread[message.guild.id]) spread[message.guild.id] = {
        onoff: 'Off'
            }
        if(spread[message.guild.id].onoff === 'Off') return;
        message.delete()
    return message.reply(`** :no_entry: خاصية منع النشر ( تعمل : :ballot_box_with_check:  *) ||  لايمكنك النشر لهذا السبب **`)
    }
 
});

client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('xnxx')){

            if(!spread[message.guild.id]) spread[message.guild.id] = {
        onoff: 'Off'
            }
        if(spread[message.guild.id].onoff === 'Off') return;
        message.delete()
    return message.reply(`** :no_entry: خاصية منع النشر ( تعمل : :ballot_box_with_check:  *) ||  لايمكنك النشر لهذا السبب **`)
    }
 
});


client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('https://discord.gg/')){
            if(!spread[message.guild.id]) spread[message.guild.id] = {
        onoff: 'Off'
            }
        if(spread[message.guild.id].onoff === 'Off') return;
        message.delete()
    return message.reply(`** :no_entry: خاصية منع النشر ( تعمل : :ballot_box_with_check:  *) ||  لايمكنك النشر لهذا السبب **`)
    }
 
});



const anti = JSON.parse(fs.readFileSync("./sec.json", "UTF8"));
const config = JSON.parse(fs.readFileSync("./config.json", "UTF8"));
client.on("message", message => {
    if (!message.channel.guild) return;
    let user = anti[message.guild.id + message.author.id]
    let num = message.content.split(" ").slice(2).join(" ");
    if (!anti[message.guild.id + message.author.id]) anti[message.guild.id + message.author.id] = {
        actions: 0
    }
    if (!config[message.guild.id]) config[message.guild.id] = {
        banLimit: 3,
        chaDelLimit: 3,
        roleDelLimit: 3,
        kickLimits: 3,
        roleCrLimits: 3,
        time: 30
    }
    if (message.content.startsWith(prefix + "settings limits")) {


        if (!message.member.hasPermission('MANAGE_GUILD')) return;
        if (message.content.startsWith(prefix + "settings limitsban")) {
            if (!num) return message.channel.send("**⇏ | أرسل رقم ! **");
            if (isNaN(num)) return message.channel.send("**⇏ | أرقام فقط ! **");
            config[message.guild.id].banLimit = num;
            message.channel.send(`**⇏ | تم التغيير اِلي : ${config[message.guild.id].banLimit} **`)
        }
        if (message.content.startsWith(prefix + "settings limitskick")) {
            if (!num) return message.channel.send("**⇏ | أرسل رقم ! **");
            if (isNaN(num)) return message.channel.send("**⇏ | أرقام فقط ! **");
            config[message.guild.id].kickLimits = num;
            message.channel.send(`**⇏ | تم التغيير اِلي : ${config[message.guild.id].kickLimits}**`)
        }
        if (message.content.startsWith(prefix + "settings limitsroleD")) {
            if (!num) return message.channel.send("**⇏ | أرسل رقم ! **");
            if (isNaN(num)) return message.channel.send("**⇏ | أرقام فقط ! **");
            config[message.guild.id].roleDelLimit = num;
            message.channel.send(`**⇏ | تم التغيير اِلي : ${config[message.guild.id].roleDelLimit}**`)
        }
        if (message.content.startsWith(prefix + "settings limitsroleC")) {
            if (!num) return message.channel.send("**⇏ | أرسل رقم ! **");
            if (isNaN(num)) return message.channel.send("**⇏ | أرقام فقط ! **");
            config[message.guild.id].roleCrLimits = num;
            message.channel.send(`**⇏ | تم التغيير اِلي : ${config[message.guild.id].roleCrLimits}**`)
        }
        if (message.content.startsWith(prefix + "settings limitschannelD")) {
            if (!num) return message.channel.send("**⇏ | أرسل رقم ! **");
            if (isNaN(num)) return message.channel.send("**⇏ | أرقام فقط ! **");
            config[message.guild.id].chaDelLimit = num;
            message.channel.send(`**⇏ | تم التغيير اِلي : ${config[message.guild.id].chaDelLimit}**`)
        }
        if (message.content.startsWith(prefix + "settings limitstime")) {
            if (!num) return message.channel.send("**⇏ | أرسل رقم ! **");
            if (isNaN(num)) return message.channel.send("**⇏ | أرقام فقط ! **");
            config[message.guild.id].time = num;
            message.channel.send(`**⇏ | تم التغيير اِلي : ${config[message.guild.id].time}**`)
        }
        fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
            if (e) throw e;
        });
        fs.writeFile("./sec.json", JSON.stringify(anti, null, 2), function (e) {
            if (e) throw e;
        });
    }
});
client.on("channelDelete", async channel => {
    const entry1 = await channel.guild.fetchAuditLogs({
        type: 'CHANNEL_DELETE'
    }).then(audit => audit.entries.first())
    console.log(entry1.executor.username)
    const entry = entry1.executor
    if (!config[channel.guild.id]) config[channel.guild.id] = {
        banLimit: 3,
        chaDelLimit: 3,
        roleDelLimit: 3,
        kickLimits: 3,
        roleCrLimits: 3
    }
    if (!anti[channel.guild.id + entry.id]) {
        anti[channel.guild.id + entry.id] = {
            actions: 1
        }
        setTimeout(() => {
            anti[channel.guild.id + entry.id].actions = "0"
        }, config[channel.guild.id].time * 1000)
    } else {
        anti[channel.guild.id + entry.id].actions = Math.floor(anti[channel.guild.id + entry.id].actions + 1)
        console.log("..");
        setTimeout(() => {
            anti[channel.guild.id + entry.id].actions = "0"
        }, config[channel.guild.id].time * 1000)
        if (anti[channel.guild.id + entry.id].actions >= config[channel.guild.id].chaDelLimit) {
       let log = channel.guild.channels.find( channel => channel.name === logroom);
       const loghack = new Discord.RichEmbed()
       .setColor('#36393e')
       .setDescription(` حاول التهكير ولكن تم حظرة بنجاح .. او قد يكون سوء تفاهم :* <@${entry.id}> `)
         log.send(loghack);
         log.send("@everyone");
       channel.guild.members.get(entry.id).ban().catch(e => channel.guild.owner.send(`<@${entry.id}> , ** < ---- لقد تخطي الحد , اظن انه يحاول التهكير ولما استطع التعامل معاة بسبب لدية صلاحيات اعلي مني **`))
            anti[channel.guild.id + entry.id].actions = "0"
            fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
                if (e) throw e;
            });
            fs.writeFile("./sec.json", JSON.stringify(anti, null, 2), function (e) {
                if (e) throw e;
            });
        }
    }

    fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
        if (e) throw e;
    });
    fs.writeFile("./sec.json", JSON.stringify(anti, null, 2), function (e) {
        if (e) throw e;
    });
});

client.on("roleDelete", async channel => {
    const entry1 = await channel.guild.fetchAuditLogs({
        type: 'ROLE_DELETE'
    }).then(audit => audit.entries.first())
    console.log(entry1.executor.username)
    const entry = entry1.executor
    if (!config[channel.guild.id]) config[channel.guild.id] = {
        banLimit: 3,
        chaDelLimit: 3,
        roleDelLimit: 3,
        kickLimits: 3,
        roleCrLimits: 3
    }
    if (!anti[channel.guild.id + entry.id]) {
        anti[channel.guild.id + entry.id] = {
            actions: 1
        }
        setTimeout(() => {
            anti[channel.guild.id + entry.id].actions = "0"
        }, config[channel.guild.id].time * 1000)
    } else {
        anti[channel.guild.id + entry.id].actions = Math.floor(anti[channel.guild.id + entry.id].actions + 1)
        console.log("Deleteing - Roles");
        setTimeout(() => {
            anti[channel.guild.id + entry.id].actions = "0"
        }, config[channel.guild.id].time * 1000)
        if (anti[channel.guild.id + entry.id].actions >= config[channel.guild.id].roleDelLimit) {
       let log = channel.guild.channels.find( channel => channel.name === logroom);
       const loghack = new Discord.RichEmbed()
       .setColor('#36393e')
       .setDescription(` حاول التهكير ولكن تم حظرة بنجاح .. او قد يكون سوء تفاهم :* <@${entry.id}> `)
         log.send(loghack);
         log.send("@everyone");
       channel.guild.members.get(entry.id).ban().catch(e => channel.guild.owner.send(`<@${entry.id}> , ** < ---- لقد تخطي الحد , اظن انه يحاول التهكير ولما استطع التعامل معاة بسبب لدية صلاحيات اعلي مني **`))
            anti[channel.guild.id + entry.id].actions = "0"
            fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
                if (e) throw e;
            });
            fs.writeFile("./sec.json", JSON.stringify(anti, null, 2), function (e) {
                if (e) throw e;
            });
        }
    }

    fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
        if (e) throw e;
    });
    fs.writeFile("./sec.json", JSON.stringify(anti, null, 2), function (e) {
        if (e) throw e;
    });
});

client.on("roleCreate", async channel => {
    const entry1 = await channel.guild.fetchAuditLogs({
        type: 'ROLE_CREATE'
    }).then(audit => audit.entries.first())
    console.log(entry1.executor.username)
    const entry = entry1.executor
    if (!config[channel.guild.id]) config[channel.guild.id] = {
        banLimit: 3,
        chaDelLimit: 3,
        roleDelLimit: 3,
        kickLimits: 3,
        roleCrLimits: 3
    }
    if (!anti[channel.guild.id + entry.id]) {
        anti[channel.guild.id + entry.id] = {
            actions: 1
        }
        setTimeout(() => {
            anti[channel.guild.id + entry.id].actions = "0"
        }, config[channel.guild.id].time * 1000)
    } else {
        anti[channel.guild.id + entry.id].actions = Math.floor(anti[channel.guild.id + entry.id].actions + 1)
        console.log("..");
        setTimeout(() => {
            anti[channel.guild.id + entry.id].actions = "0"
        }, config[channel.guild.id].time * 1000)
        if (anti[channel.guild.id + entry.id].actions >= config[channel.guild.id].roleCrLimits) {
       let log = channel.guild.channels.find( channel => channel.name === logroom);
       const loghack = new Discord.RichEmbed()
       .setColor('#36393e')
       .setDescription(` حاول التهكير ولكن تم حظرة بنجاح .. او قد يكون سوء تفاهم :* <@${entry.id}> `)
         log.send(loghack);
         log.send("@everyone");
       channel.guild.members.get(entry.id).ban().catch(e => channel.guild.owner.send(`<@${entry.id}> , ** < ---- لقد تخطي الحد , اظن انه يحاول التهكير ولما استطع التعامل معاة بسبب لدية صلاحيات اعلي مني **`))
       anti[channel.guild.id + entry.id].actions = "0"
       fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
       if (e) throw e;
            });
            fs.writeFile("./sec.json", JSON.stringify(anti, null, 2), function (e) {
                if (e) throw e;
            });
        }
    }

    fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
        if (e) throw e;
    });
    fs.writeFile("./sec.json", JSON.stringify(anti, null, 2), function (e) {
        if (e) throw e;
    });
});

client.on("guildBanAdd", async (guild, user, channel) => {
    const entry1 = await channel.guild.fetchAuditLogs({
        type: 'MEMBER_BAN_ADD'
    }).then(audit => audit.entries.first())
    console.log(entry1.executor.username)
    const entry = entry1.executor
    if (!config[guild.id]) config[guild.id] = {
        banLimit: 3,
        chaDelLimit: 3,
        roleDelLimit: 3,
        kickLimits: 3,
        roleCrLimits: 3
    }
    if (!anti[guild.id + entry.id]) {
        anti[guild.id + entry.id] = {
            actions: 1
        }
        setTimeout(() => {
            anti[guild.id + entry.id].actions = "0"
        }, config[guild.id].time * 1000)
    } else {
        anti[guild.id + entry.id].actions = Math.floor(anti[guild.id + entry.id].actions + 1)
        console.log("Baning - Members");
        setTimeout(() => {
            anti[guild.id + entry.id].actions = "0"
        }, config[guild.id].time * 1000)
        if (anti[guild.id + entry.id].actions >= config[guild.id].banLimit) {
       let log = channel.guild.channels.find( channel => channel.name === logroom);
       const loghack = new Discord.RichEmbed()
       .setColor('#36393e')
       .setDescription(` حاول التهكير ولكن تم حظرة بنجاح .. او قد يكون سوء تفاهم :* <@${entry.id}> `)
         log.send(loghack);
         log.send("@everyone");
       channel.guild.members.get(entry.id).ban().catch(e => channel.guild.owner.send(`<@${entry.id}> , ** < ---- لقد تخطي الحد , اظن انه يحاول التهكير ولما استطع التعامل معاة بسبب لدية صلاحيات اعلي مني **`))
            anti[guild.id + entry.id].actions = "0"
            fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
                if (e) throw e;
            });
            fs.writeFile("./sec.json", JSON.stringify(anti, null, 2), function (e) {
                if (e) throw e;
            });
        }
    }

    fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
        if (e) throw e;
    });
    fs.writeFile("./sec.json", JSON.stringify(anti, null, 2), function (e) {
        if (e) throw e;
    });
});

client.on("guildKickAdd", async (guild, user, channel) => {
    const entry1 = await channel.fetchAuditLogs({
        type: 'MEMBER_KICK'
    }).then(audit => audit.entries.first())
    console.log(entry1.executor.username)
    const entry = entry1.executor
    if (!config[guild.id]) config[guild.id] = {
        banLimit: 3,
        chaDelLimit: 3,
        roleDelLimit: 3,
        kickLimits: 3,
        roleCrLimits: 3
    }
    if (!anti[guild.id + entry.id]) {
        anti[guild.id + entry.id] = {
            actions: 1
        }
        setTimeout(() => {
            anti[guild.id + entry.id].actions = "0"
        }, config[guild.id].time * 1000)
    } else {
        anti[guild.id + entry.id].actions = Math.floor(anti[guild.id + entry.id].actions + 1)
        console.log("Kicking - Mebers");
        setTimeout(() => {
            anti[guild.id + entry.id].actions = "0"
        }, config[guild.id].time * 1000)
        if (anti[guild.id + entry.id].actions >= config[guild.id].banLimit) {
       let log = channel.guild.channels.find( channel => channel.name === logroom);
       const loghack = new Discord.RichEmbed()
       .setColor('#36393e')
       .setDescription(` حاول التهكير ولكن تم حظرة بنجاح .. او قد يكون سوء تفاهم :* <@${entry.id}> `)
         log.send(loghack);
         log.send("@everyone");
       channel.guild.members.get(entry.id).ban().catch(e => channel.guild.owner.send(`<@${entry.id} , ** < ---- لقد تخطي الحد , اظن انه يحاول التهكير ولما استطع التعامل معاة بسبب لدية صلاحيات اعلي مني **`))
            anti[guild.id + entry.id].actions = "0"
            fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
                if (e) throw e;
            });
            fs.writeFile("./sec.json", JSON.stringify(anti, null, 2), function (e) {
                if (e) throw e;
            });
        }
    }

    fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
        if (e) throw e;
    });
    fs.writeFile("./sec.json", JSON.stringify(anti, null, 2), function (e) {
        if (e) throw e;
    });
});

client.on("guildMemberRemove", async member => {
    const entry1 = await member.guild.fetchAuditLogs().then(audit => audit.entries.first())
    if (entry1.action === "MEMBER_KICK") {
        const entry2 = await member.guild.fetchAuditLogs({
            type: "MEMBER_KICK"
        }).then(audit => audit.entries.first())
        const entry = entry2.executor;
        if (!config[member.guild.id]) config[guild.id] = {
            banLimit: 3,
            chaDelLimit: 3,
            roleDelLimit: 3,
            kickLimits: 3,
            roleCrLimits: 3
        }
        if (!anti[member.guild.id + entry.id]) {
            anti[member.guild.id + entry.id] = {
                actions: 1
            }
            setTimeout(() => {
                anti[member.guild.id + entry.id].actions = "0"
            }, config[member.guild.id].time * 1000)
        } else {
            anti[member.guild.id + entry.id].actions = Math.floor(anti[member.guild.id + entry.id].actions + 1)
            console.log("Kicking - Members");
            setTimeout(() => {
                anti[member.guild.id + entry.id].actions = "0"
            }, config[member.guild.id].time * 1000)
            if (anti[member.guild.id + entry.id].actions >= config[member.guild.id].kickLimits) {
       let log = channel.guild.channels.find( channel => channel.name === logroom);
       const loghack = new Discord.RichEmbed()
       .setColor('#36393e')
       .setDescription(` حاول التهكير ولكن تم حظرة بنجاح .. او قد يكون سوء تفاهم :* <@${entry.id}> `)
         log.send(loghack);
         log.send("@everyone");
       channel.guild.members.get(entry.id).ban().catch(e => channel.guild.owner.send(`<@${entry.id}> , ** < ---- لقد تخطي الحد , اظن انه يحاول التهكير ولما استطع التعامل معاة بسبب لدية صلاحيات اعلي مني **`))
                anti[member.guild.id + entry.id].actions = "0"
                fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
                    if (e) throw e;
                });
                fs.writeFile("./sec.json", JSON.stringify(anti, null, 2), function (e) {
                    if (e) throw e;
                });
            }
        }

        fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
            if (e) throw e;
        });
        fs.writeFile("./sec.json", JSON.stringify(anti, null, 2), function (e) {
            if (e) throw e;
        });
    }

})

client.login(process.env.KahTOKEN);
