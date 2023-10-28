import { useState } from "react"
import "../css/Character.css";
require('dotenv').config() 
const API_KEY = process.env.OPENAIAPIKEY; // secure -> environment variable
console.log(API_KEY);

function Character() {
  const [tweet, setTweet] = useState("");
  const [sentiment, setSentiment] = useState({__html: ""}); // "Negative" or "Positive"

  async function callOpenAIAPI() {
    console.log("Calling the OpenAI API");
    console.log(tweet);

    // For 0-10
    // What is the sentiment of this tweet with a value between 0 and 10 (10 being its very positive)? 
/*
    const APIBody = {
      "model": "text-davinci-003",
      "prompt": "What is the sentiment of this tweet? " + tweet,
      "temperature": 0,
      "max_tokens": 60,
      "top_p": 1.0,
      "frequency_penalty": 0.0,
      "presence_penalty": 0.0
    }
*/
    const APIBody = {
        "model": "gpt-3.5-turbo-0613",
        "messages":[
                {"role": "system", "content": "You must provide responses nested in HTML elements and act as an expert therapeutic advisor well studied in character attribute identification that will interpret the statement of a user and leverage only the archetypes within the following list to return the best 5 matches, a description of the archetype, 3 strengths, 3 weaknesses, 3 opportunities, 3 threats, 3 comic book characters, and 3 literary characters that best match: Accountant, Achiever, Addict, Addicted Lover, Adonis, Adventurer, Advocate, Alchemist, Ally, Amateur, Ambassador, Analyst, Anarchist, Anchorite, Angel, Anima, Animus, Apprentice, Arbitrator, Architect, Artisan, Artist, Assassin, Athlete, Attila, Attorney, Author, Avenger, Beggar, Black Widow, Bon Vivant, Boss, Builder, Bully, Burglar, Campaigner, Caregiver, Casanova, Celibate, Challenger, Champion, Chef, Chief, Child, Cleaner, Clown, Coach, Commander, Communicator, Companion, Con Artist, Consort, Consumer, Copyist, Counselor, Courier, Court Jester, Coward, Craftsperson, Creator, Crime Fighter, Critic, Crone, Damsel, Dark Lord, Defender, Derelict, Destroyer, Detached Manipulator, Detective, Devotee, Devouring Mother, Dilettante, Diplomat, Disciple, Divine Child, Don Juan, Double Agent, Dreamer, Drunk, Dummy, Earth Mother, Emperor, Empress, Enchantress, Enforcer, Engineer, Entertainer, Enthusiast, Environmentalist, Epicure, Escort, Eternal Boy/Girl, Evangelist, Everyman, Examiner, Exorcist, Explorer, Fairy Godmother, Father, Femme Fatale, Fighter, Flirt, Follower, Fool, Friend, Gambler, Gigolo, Giver, Glutton, Go-Between, God, Goddess, Godfather, Gourmand, Gourmet, Grandstander Bully, Growth Seeker, Guide, Gunslinger, Guru, Healer, Hedonist, Helper, Herald, Hermit, Hero, Heroine, High Chair Tyrant, Ice Queen, Idiot, Implementer, Impotent Lover, Impresario, Indentured Servant, Indigent, Individualist, Innocent Child, Innocent One, Innovator, Inspirer, Instructor, Insurance Agent, Intellectual, Intuitive Healer, Inventor, Jester, Journalist, Judge, Kamikaze, Killer, King, Knight, Leader, Legislator, Liberator, Lobbyist, Loner, Loser, Lover, Loyalist, Mad Scientist, Magical Child, Magician, Maiden, Martyr, Masochist, Master, Matriarch, Mediator, Meditator, Mentor, Mercenary, Messenger, Messiah, Midas, Minister, Minstrel, Miser, Momma's Boy, Monk, Monster, Mother, Mother Nature, Muse, Mystic, Narcissist, Narrator, Nerd, Networker, Ninja, Nomad, Nonconformist, Novice, Nun, Nurse, Observer, Oedipal Child, Olympian, Orchestrator, Orphan, Orphan Child, Outcast, Outlaw, Patriarch, Peacekeeper, Peacemaker, Perfect Mother, Perfectionist, Performer, Persona, Philosopher, Pickpocket, Pilgrim, Pioneer, Pirate, Planner, Poet, Preacher, Precocious Child, Priest, Priestess, Prince, Princess, Private Investigator, Problem Solver, Producer, Profane Prostitute, Progenitor, Promoter, Prophet, Prostitute, Protector, Protester, Provocateur, Psychopath, Queen, Quiet Leader, Rabbi, Rebel, Redeemer, Reformer, Renunciate, Repossession Specialist, Rescuer, Revolutionary, Right Arm, Robin Hood, Romantic, Ruler, Saboteur, Sacred Prostitute, Sadist, Sage, Salesman, Samaritan, Samurai, Savior, Scapegoat, Scavenger, Schemer, Scientist, Scribe, Sculptor, Secretary, Seducer, Seductress, Seeker, Seer, Serial Killer, Serpent, Servant, Settler, Sex Addict, Shadow, Shaman, Shape-shifter, Shaper, Sherlock Holmes, Sidekick, Siren, Skeptic, Slave, Sleuth, Snoop, Sociopath, Soldier, Soldier of Fortune, Spell-caster, Spiritual Master, Spoiler, Spy, Stepmother, Storyteller, Strategist, Student, Succubus, Swindler, Sybarite, Tax Collector, Teacher, Technician, Temptress, The Self, Therapist, Thief, Thinker, Tomboy, Trailblazer, Trickster, Tutor, Tyrant, Vagabond, Vampire, Victim, Villain, Virgin, Visionary, Wanderer, Warrior, Weakling, Weakling Prince, Weaver, Werewolf, Wise Old Man, Wise Woman, Witch, Wizard, Workaholic, Working Mother, Wounded Child, Wounded Healer, Zombie, Necromancer, Demon, Zoologist, Proctologist, Animal Spirit, God, Demi-God, King, Viking, Dragon, Sailor, Shapeshifter, Celestial Being, Hypocrite, Space Traveler, Robot, Time Traveler, Zero, Zephyr, Zen Master, Zealot"},
                {"role": "user", "content": tweet}
        ],
        "max_tokens": 1400,
        "top_p": 1.0,
        "frequency_penalty": 0.0,
        "presence_penalty": 0.0
    }

    await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + API_KEY
      },
      body: JSON.stringify(APIBody)
    }).then((data) => {
      return data.json();
    }).then((data) => {
      console.log("Response",data);
      console.log(data["choices"][0]["message"]["content"]);
      let resp = data["choices"][0]["message"]["content"];
      setSentiment({__html: resp}); // Positive or negative
    });
  }

  return (
    <div className="Character">
      <h2>Character Designer</h2>
      <p className="tagline">Open the door to your main character</p>
      <div>
        <textarea
          onChange={(e) => setTweet(e.target.value)}
          placeholder='Tell me about who you are, want to be, or someone you wish to understand so that I can design your character'
          cols={50}
          rows={6}
        />
      </div>
      <div>
        <button onClick={callOpenAIAPI}>Design Character</button>
      </div>
      <div className="CharacterResponse">
        <div dangerouslySetInnerHTML={sentiment} />
      </div>
    </div>
  );
}

export default Character;