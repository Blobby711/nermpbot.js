module.exports = {
	name: "emoji",
	aliases: ["emo", "e"],
    description: "Will convert all standard letters and numbers to their corresponding emoji forms.",
    usage: "<message to emojify>",
	execute(message, args) {
        let letterMap = new Map([
            ["a", ":regional_indicator_a:"],
            ["b", ":regional_indicator_b:"],
            ["c", ":regional_indicator_c:"],
            ["d", ":regional_indicator_d:"],
            ["e", ":regional_indicator_e:"],
            ["f", ":regional_indicator_f:"],
            ["g", ":regional_indicator_g:"],
            ["h", ":regional_indicator_h:"],
            ["i", ":regional_indicator_i:"],
            ["j", ":regional_indicator_j:"],
            ["k", ":regional_indicator_k:"],
            ["l", ":regional_indicator_l:"],
            ["m", ":regional_indicator_m:"],
            ["n", ":regional_indicator_n:"],
            ["o", ":regional_indicator_o:"],
            ["p", ":regional_indicator_p:"],
            ["q", ":regional_indicator_q:"],
            ["r", ":regional_indicator_r:"],
            ["s", ":regional_indicator_s:"],
            ["t", ":regional_indicator_t:"],
            ["u", ":regional_indicator_u:"],
            ["v", ":regional_indicator_v:"],
            ["w", ":regional_indicator_w:"],
            ["x", ":regional_indicator_x:"],
            ["y", ":regional_indicator_y:"],
            ["z", ":regional_indicator_z:"],
            ["A", ":regional_indicator_a:"],
            ["B", ":regional_indicator_b:"],
            ["C", ":regional_indicator_c:"],
            ["D", ":regional_indicator_d:"],
            ["E", ":regional_indicator_e:"],
            ["F", ":regional_indicator_f:"],
            ["G", ":regional_indicator_g:"],
            ["H", ":regional_indicator_h:"],
            ["I", ":regional_indicator_i:"],
            ["J", ":regional_indicator_j:"],
            ["K", ":regional_indicator_k:"],
            ["L", ":regional_indicator_l:"],
            ["M", ":regional_indicator_m:"],
            ["N", ":regional_indicator_n:"],
            ["O", ":regional_indicator_o:"],
            ["P", ":regional_indicator_p:"],
            ["Q", ":regional_indicator_q:"],
            ["R", ":regional_indicator_r:"],
            ["S", ":regional_indicator_s:"],
            ["T", ":regional_indicator_t:"],
            ["U", ":regional_indicator_u:"],
            ["V", ":regional_indicator_v:"],
            ["W", ":regional_indicator_w:"],
            ["X", ":regional_indicator_x:"],
            ["Y", ":regional_indicator_y:"],
            ["Z", ":regional_indicator_z:"],
            ["1", ":one:"],
            ["2", ":two:"],
            ["3", ":three:"],
            ["4", ":four:"],
            ["5", ":five:"],
            ["6", ":six:"],
            ["7", ":seven:"],
            ["8", ":eight:"],
            ["9", ":nine:"],
            ["0", ":zero:"],
            ["!", ":grey_exclamation:"],
            ["?", ":grey_question:"],
            ["*", ":asterisk:"],
            ["#", ":hash:"],
            ["$", ":heavy_dollar_sign:"],
            ["+", ":heavy_plus_sign:"],
            ["-", ":heavy_minus_sign:"],
            [",", " "],
        ]);
        let word = "";
        if (!args.length) {
            //return message.reply("you need to put in text to emojify.");
            const filter = m => m.author.id === message.author.id;
            message.channel.send("What do you want to emojify?");
            const numMessageCollector = message.channel.createMessageCollector(filter, { time: 10000, max: 1 });
            numMessageCollector.on("collect", m => {
                console.log(`Collected ${m.content}`);
            });
        
            numMessageCollector.on("end", collected => {
                console.log(`Collected ${collected.size} items`);
                if (collected.size == 0) {
                    return message.reply("nothing was inputted.");
                }
                let numAdd = collected.map(numMessage => {
                    return numMessage.content;
                });
                word = numAdd.toString().split("");
                for (let x = 0; x < word.length; x++) {
                    if (letterMap.has(word[x])) {
                        word[x] = letterMap.get(word[x]);
                    }
                }
                message.channel.send(word.join(""));
            });
        } else { 
            word = args.toString().split("");
            for (let x = 0; x < word.length; x++) {
                if (letterMap.has(word[x])) {
                    word[x] = letterMap.get(word[x]);
                }
            }
            message.channel.send(word.join(""));
        }
	},
};