I Ported Ghar Ghar from Paper to Phones/PCs (with Multiplayer)

Who remembers creating a matrix of dots on paper and connecting these dots via lines to claim their so-called "ghar"? We can all agree that ghar ghar as a game sparks a nostalgia of our long-gone childhood. I've always dreamt of porting this era-defining game from paper to the devices that can run a browser for a very long time. I did not want to repeat the formula of passing the paper (and subsequently the device) among the participants, I wanted a true multiplayer experience that could be achieved via WAN (the internet) or LAN (the devices on your Wi-Fi network). 

I am not a programmer, but the advancements in LLMs and the projects I built with the help of turn-based LLMs and then agents gave me hope that, we, the people of literature and language, can also transform words into workable code. So, at first, I tried making gharghar via Gemini 3.1 Pro in Antivravity. The multiplayer functionality worked in the first try, but only for LAN, and it would disappear when I deployed it to Vercel, while the design left a lot to be desired. 

Fast forward to these days when Google released Gemini 3.8 Flash in Antigravity, it was already performing decent in my other projects, so I thiught, why not give ghar ghar a try again. So I dusted out the old prompt, tweaked a few things in it and let Antigravity do its thing and this is how this iteration of Ghar Ghar came into existence. I liked the UX and flow of this game, but the LAN and WAN multiplayer functionality was not working in the one-shot result, and there were a host of bugs, and I spent hours on Vibe debugging and making multiplayer work on the deployment over Cloudflare (with the help of GPT 5.6 Tera and Luna in Codex). So here it is, 2(Ghar), an algebraic notation that means Ghar Ghar. Here is how to play this game: 

1. You as a host create a room, it is joinable on both LAN and WAN. 
2. A room can host up uo 5 players, humans and bots. 
3. Your room is auto-discoverable on LAN (you will need to hit refresh). 
4. Copy the link to the room and share it with your friends over any IM of your choice. 
5. Once your participants join the room, hit "Start Game Now " and enjoy playing your childhood-defining game! 
6. You can even press K or the mic icon to converse in-game via push-to-talk (works only on LAN). 
7. You can customize the grid of dots and even save the game as a PWA! 

You can test this game here: https://playgharghar.pages.dev/
GitHub Repo: https://github.com/iasad12/GharGharOnline/

If you have any feature requests or want to provide feedback, please speak your heart out in comments.
