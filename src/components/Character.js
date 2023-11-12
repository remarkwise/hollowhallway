import { useState } from "react";
import TextField from "../components/TextField";
import "../css/Character.css";
require("dotenv").config();

const archetypeExplorerGPT =
  "https://chat.openai.com/g/g-rs5aA9uS8-archetype-explorer";

const instructions =
  "https://www.maisieai.com/help/how-to-get-an-openai-api-key-for-chatgpt";

// OpenAI key
const API_KEY = process.env.REACT_APP_OPENAI_API_KEY; // secure -> environment variable
let useAPI = false;
let OpenAIModel = "gpt-3.5-turbo";
let unlockKey = "deansaysgo";
let defaultKey = unlockKey;
OpenAIModel = "gpt-4";
// OpenAIModel = "gpt-4";

function Character() {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [sentiment, setSentiment] = useState({ __html: "" }); // "Negative" or "Positive"
  const [AIAPI, setAIAPI] = useState({ key: defaultKey });
  const valueUpdated = (e) => {
    setAIAPI({
      ...AIAPI,
      [e.target.name]: e.target.value,
    });
  };

  async function callOpenAIAPI() {
    if (AIAPI.key == unlockKey) {
      useAPI = API_KEY;
    }
    console.log("Call AI");
    console.log(prompt);
    setLoading(true);

    const APIBody = {
      model: OpenAIModel,
      messages: [
        {
          role: "system",
          content:
            "You are an expert therapeutic advisor who provides feedback within HTML. The user provides insights about themselves that you interpret to select the 5 best archetypes from the following list, a definition of the archetype, three strengths, 3 weaknesses, 3 opportunities, and 3 threats, followed by 3 famous historical figures, and finally 3 literary, film, or comic characters. The list of archetypes you can select the best matches from are: Accountant, Achiever, Addict, Addicted Lover, Adonis, Adventurer, Advocate, Alchemist, Ally, Amateur, Ambassador, Analyst, Anarchist, Anchorite, Angel, Anima, Animus, Apprentice, Arbitrator, Architect, Artisan, Artist, Assassin, Athlete, Attila, Attorney, Author, Avenger, Beggar, Black Widow, Bon Vivant, Boss, Builder, Bully, Burglar, Campaigner, Caregiver, Casanova, Celibate, Challenger, Champion, Chef, Chief, Child, Cleaner, Clown, Coach, Commander, Communicator, Companion, Con Artist, Consort, Consumer, Copyist, Counselor, Courier, Court Jester, Coward, Craftsperson, Creator, Crime Fighter, Critic, Crone, Damsel, Dark Lord, Defender, Derelict, Destroyer, Detached Manipulator, Detective, Devotee, Devouring Mother, Dilettante, Diplomat, Disciple, Divine Child, Don Juan, Double Agent, Dreamer, Drunk, Dummy, Earth Mother, Emperor, Empress, Enchantress, Enforcer, Engineer, Entertainer, Enthusiast, Environmentalist, Epicure, Escort, Eternal Boy/Girl, Evangelist, Everyman, Examiner, Exorcist, Explorer, Fairy Godmother, Father, Femme Fatale, Fighter, Flirt, Follower, Fool, Friend, Gambler, Gigolo, Giver, Glutton, Go-Between, God, Goddess, Godfather, Gourmand, Gourmet, Grandstander Bully, Growth Seeker, Guide, Gunslinger, Guru, Healer, Hedonist, Helper, Herald, Hermit, Hero, Heroine, High Chair Tyrant, Ice Queen, Idiot, Implementer, Impotent Lover, Impresario, Indentured Servant, Indigent, Individualist, Innocent Child, Innocent One, Innovator, Inspirer, Instructor, Insurance Agent, Intellectual, Intuitive Healer, Inventor, Jester, Journalist, Judge, Kamikaze, Killer, King, Knight, Leader, Legislator, Liberator, Lobbyist, Loner, Loser, Lover, Loyalist, Mad Scientist, Magical Child, Magician, Maiden, Martyr, Masochist, Master, Matriarch, Mediator, Meditator, Mentor, Mercenary, Messenger, Messiah, Midas, Minister, Minstrel, Miser, Momma's Boy, Monk, Monster, Mother, Mother Nature, Muse, Mystic, Narcissist, Narrator, Nerd, Networker, Ninja, Nomad, Nonconformist, Novice, Nun, Nurse, Observer, Oedipal Child, Olympian, Orchestrator, Orphan, Orphan Child, Outcast, Outlaw, Patriarch, Peacekeeper, Peacemaker, Perfect Mother, Perfectionist, Performer, Persona, Philosopher, Pickpocket, Pilgrim, Pioneer, Pirate, Planner, Poet, Preacher, Precocious Child, Priest, Priestess, Prince, Princess, Private Investigator, Problem Solver, Producer, Profane Prostitute, Progenitor, Promoter, Prophet, Prostitute, Protector, Protester, Provocateur, Psychopath, Queen, Quiet Leader, Rabbi, Rebel, Redeemer, Reformer, Renunciate, Repossession Specialist, Rescuer, Revolutionary, Right Arm, Robin Hood, Romantic, Ruler, Saboteur, Sacred Prostitute, Sadist, Sage, Salesman, Samaritan, Samurai, Savior, Scapegoat, Scavenger, Schemer, Scientist, Scribe, Sculptor, Secretary, Seducer, Seductress, Seeker, Seer, Serial Killer, Serpent, Servant, Settler, Sex Addict, Shadow, Shaman, Shape-shifter, Shaper, Sherlock Holmes, Sidekick, Siren, Skeptic, Slave, Sleuth, Snoop, Sociopath, Soldier, Soldier of Fortune, Spell-caster, Spiritual Master, Spoiler, Spy, Stepmother, Storyteller, Strategist, Student, Succubus, Swindler, Sybarite, Tax Collector, Teacher, Technician, Temptress, The Self, Therapist, Thief, Thinker, Tomboy, Trailblazer, Trickster, Tutor, Tyrant, Vagabond, Vampire, Victim, Villain, Virgin, Visionary, Wanderer, Warrior, Weakling, Weakling Prince, Weaver, Werewolf, Wise Old Man, Wise Woman, Witch, Wizard, Workaholic, Working Mother, Wounded Child, Wounded Healer, Zombie, Necromancer, Demon, Zoologist, Proctologist, Animal Spirit, God, Demi-God, King, Viking, Dragon, Sailor, Shapeshifter, Celestial Being, Hypocrite, Space Traveler, Robot, Time Traveler, Zero, Zephyr, Zen Master, Zealot",
        },
        { role: "user", content: prompt },
      ],
      max_tokens: 1400,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    };

    await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + useAPI,
      },
      body: JSON.stringify(APIBody),
    })
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        console.log("Response", data);
        console.log(data["choices"][0]["message"]["content"]);
        setLoading(false);
        let resp = data["choices"][0]["message"]["content"];
        setSentiment({ __html: resp }); // Positive or negative
      });
  }

  const KeyPrompt = () => {
    // console.log(AIAPI.key, AIAPI.key.length);
    if (!AIAPI.key || AIAPI.key.length < 10) {
      return;
    } else {
      return (
        <p className="center">
          <button className="CharacterDesignerButton" onClick={callOpenAIAPI}>
            <i className="fa fa-fw fa-lg fa-user-circle"></i>{" "}
            <b>Design Character</b>
          </button>
        </p>
      );
    }
  };

  const LoadingPrompt = (load) => {
    if (load) {
      return <span className="loading">Loading</span>;
    } else {
      return <span></span>;
    }
  };

  return (
    <div className="Character">
      <h2 className="center">Archetype Explorer</h2>
      <p className="tagline center">Open the door to your main character</p>
      <p>
        <textarea
          className="CharacterDesignerPrompt"
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Tell me about who you are, want to be, or someone you wish to understand so that I can design your character"
          cols={50}
          rows={6}
        />
      </p>
      <KeyPrompt />
      <div className="CharacterResponse">
        {LoadingPrompt(loading)}
        <div dangerouslySetInnerHTML={sentiment} />
      </div>
      <hr />
      <h4>Beta GPT</h4>
      <p>Have ChatGPT Plus? Want to try the newest GPT?</p>
      <p>
        Of course you do try{" "}
        <a href={archetypeExplorerGPT} target="_blank">
          Archetype Explorer+
        </a>
      </p>
      <hr />
      <TextField
        fieldName="key"
        label="OpenAI API Key"
        onChange={valueUpdated}
        helper={instructions}
      />
    </div>
  );
}

export default Character;
