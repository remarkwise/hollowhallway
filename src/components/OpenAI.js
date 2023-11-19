require("dotenv").config();
const API_KEY = process.env.REACT_APP_OPENAI_API_KEY; // secure -> environment variable
let OpenAIModel = "gpt-4";
OpenAIModel = "gpt-4-1106-preview"; // Turbo

async function OpenAI(props) {
  console.log("Initiate OpenAI", props);
  let prompt = props.prompt;
  let type = props.type;
  if (prompt === undefined || prompt == false || prompt.length < 20) {
    console.log("Bad Prompt", prompt);
    return;
  }
  let systemContent = "";
  switch (type) {
    case "archetype":
      systemContent =
        "You are an expert therapeutic advisor. The user provides insights about themselves that you interpret to select the 5 best archetypes from the following list, a definition of the archetype, three strengths, 3 weaknesses, 3 opportunities, and 3 threats, followed by 3 famous historical figures, and finally 3 literary, film, or comic characters. The list of archetypes you can select the best matches from are: Accountant, Achiever, Addict, Addicted Lover, Adonis, Adventurer, Advocate, Alchemist, Ally, Amateur, Ambassador, Analyst, Anarchist, Anchorite, Angel, Anima, Animus, Apprentice, Arbitrator, Architect, Artisan, Artist, Assassin, Athlete, Attila, Attorney, Author, Avenger, Beggar, Black Widow, Bon Vivant, Boss, Builder, Bully, Burglar, Campaigner, Caregiver, Casanova, Celibate, Challenger, Champion, Chef, Chief, Child, Cleaner, Clown, Coach, Commander, Communicator, Companion, Con Artist, Consort, Consumer, Copyist, Counselor, Courier, Court Jester, Coward, Craftsperson, Creator, Crime Fighter, Critic, Crone, Damsel, Dark Lord, Defender, Derelict, Destroyer, Detached Manipulator, Detective, Devotee, Devouring Mother, Dilettante, Diplomat, Disciple, Divine Child, Don Juan, Double Agent, Dreamer, Drunk, Dummy, Earth Mother, Emperor, Empress, Enchantress, Enforcer, Engineer, Entertainer, Enthusiast, Environmentalist, Epicure, Escort, Eternal Boy/Girl, Evangelist, Everyman, Examiner, Exorcist, Explorer, Fairy Godmother, Father, Femme Fatale, Fighter, Flirt, Follower, Fool, Friend, Gambler, Gigolo, Giver, Glutton, Go-Between, God, Goddess, Godfather, Gourmand, Gourmet, Grandstander Bully, Growth Seeker, Guide, Gunslinger, Guru, Healer, Hedonist, Helper, Herald, Hermit, Hero, Heroine, High Chair Tyrant, Ice Queen, Idiot, Implementer, Impotent Lover, Impresario, Indentured Servant, Indigent, Individualist, Innocent Child, Innocent One, Innovator, Inspirer, Instructor, Insurance Agent, Intellectual, Intuitive Healer, Inventor, Jester, Journalist, Judge, Kamikaze, Killer, King, Knight, Leader, Legislator, Liberator, Lobbyist, Loner, Loser, Lover, Loyalist, Mad Scientist, Magical Child, Magician, Maiden, Martyr, Masochist, Master, Matriarch, Mediator, Meditator, Mentor, Mercenary, Messenger, Messiah, Midas, Minister, Minstrel, Miser, Momma's Boy, Monk, Monster, Mother, Mother Nature, Muse, Mystic, Narcissist, Narrator, Nerd, Networker, Ninja, Nomad, Nonconformist, Novice, Nun, Nurse, Observer, Oedipal Child, Olympian, Orchestrator, Orphan, Orphan Child, Outcast, Outlaw, Patriarch, Peacekeeper, Peacemaker, Perfect Mother, Perfectionist, Performer, Persona, Philosopher, Pickpocket, Pilgrim, Pioneer, Pirate, Planner, Poet, Preacher, Precocious Child, Priest, Priestess, Prince, Princess, Private Investigator, Problem Solver, Producer, Profane Prostitute, Progenitor, Promoter, Prophet, Prostitute, Protector, Protester, Provocateur, Psychopath, Queen, Quiet Leader, Rabbi, Rebel, Redeemer, Reformer, Renunciate, Repossession Specialist, Rescuer, Revolutionary, Right Arm, Robin Hood, Romantic, Ruler, Saboteur, Sacred Prostitute, Sadist, Sage, Salesman, Samaritan, Samurai, Savior, Scapegoat, Scavenger, Schemer, Scientist, Scribe, Sculptor, Secretary, Seducer, Seductress, Seeker, Seer, Serial Killer, Serpent, Servant, Settler, Sex Addict, Shadow, Shaman, Shape-shifter, Shaper, Sherlock Holmes, Sidekick, Siren, Skeptic, Slave, Sleuth, Snoop, Sociopath, Soldier, Soldier of Fortune, Spell-caster, Spiritual Master, Spoiler, Spy, Stepmother, Storyteller, Strategist, Student, Succubus, Swindler, Sybarite, Tax Collector, Teacher, Technician, Temptress, The Self, Therapist, Thief, Thinker, Tomboy, Trailblazer, Trickster, Tutor, Tyrant, Vagabond, Vampire, Victim, Villain, Virgin, Visionary, Wanderer, Warrior, Weakling, Weakling Prince, Weaver, Werewolf, Wise Old Man, Wise Woman, Witch, Wizard, Workaholic, Working Mother, Wounded Child, Wounded Healer, Zombie, Necromancer, Demon, Zoologist, Proctologist, Animal Spirit, God, Demi-God, King, Viking, Dragon, Sailor, Shapeshifter, Celestial Being, Hypocrite, Space Traveler, Robot, Time Traveler, Zero, Zephyr, Zen Master, Zealot. Provide response structured as HTML code.";
      break;
    case "storycards":
      systemContent =
        "You are a creative storyteller that uses metaphors to explain contemporary challenges. Use the provided elements to create a story. Provide response structured as HTML code.";
      systemContent =
        "You are a creative storyteller that uses metaphors to explain contemporary challenges. Use the provided elements to create a story. ";
      break;
    default:
      console.log("No Type", type);
      return;
  }

  console.log("Call AI");
  console.log(prompt);

  const APIBody = {
    model: OpenAIModel,
    messages: [
      {
        role: "system",
        content: systemContent,
      },
      { role: "user", content: prompt },
    ],
    max_tokens: 2000,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
  };

  await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + API_KEY,
    },
    body: JSON.stringify(APIBody),
  })
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      console.log("Response", data);
      let resp = "";
      if (data.error) {
        console.log("Error", data.error.message);
        resp = data.error.message;
        return <div className="openai-response">{resp}</div>;
      }
      console.log("Content", data["choices"][0]["message"]["content"]);
      resp = data["choices"][0]["message"]["content"];

      return (
        <div className="openai-response">
          {resp}
          <div dangerouslySetInnerHTML={{ __html: resp }} />
        </div>
      );
    });
}

export default OpenAI;
