window.cipherCodes ??= {};

const sf2Config = new CipherCollectionConfig(
    'sf2',
    'Star Force 2'
);

/**
 * @see https://www.therockmanexezone.com/wiki/Cipher_Mail_(MMSF2)
 */
window.cipherCodes[sf2Config.id] = new CipherCodeCollection([
    new CipherCode(
        '01',
        'Cannon *1',
        `RALETSOEG`,
        ['Battle Card (Star),Battle Card']
    ),
    new CipherCode(
        '02',
        'Search Eye',
        `OTIBNER`,
        ['Sub Card']
    ),
    new CipherCode(
        '03',
        'Plasma Gun 2',
        `KREREDZREBNUREHT`,
        ['Battle Card']
    ),
    new CipherCode(
        '04',
        'White Meteor',
        `INWOJAODN`,
        ['Battle Card']
    ),
    new CipherCode(
        '05',
        'Unlocker',
        `IARENFINURA`,
        ['Sub Card']
    ),
    new CipherCode(
        '06',
        'Recover 200',
        `BRITEINKG`,
        ['Battle Card']
    ),
    new CipherCode(
        '07',
        'HP +50 / 50',
        `NDETORHBRBA`,
        ['Ability Wave']
    ),
    new CipherCode(
        '08',
        'Fire Search',
        `STERLDGNEEMAYAR`,
        ['Sub Card']
    ),
    new CipherCode(
        '09',
        'HP +100 / 135',
        `KYWSAVE`,
        ['Ability Wave']
    ),
    new CipherCode(
        '10',
        'Recover 150',
        `BEMOCOBST`,
        ['Battle Card']
    ),
    new CipherCode(
        '11',
        'Recover 50',
        `LYGEENRAD`,
        ['Battle Card']
    ),
    new CipherCode(
        '12',
        'Plasma Gun 2 *1',
        `RIETCARRSAR`,
        ['Battle Card (Star),Battle Card']
    ),
    new CipherCode(
        '13',
        'Sync Hook 3 *1',
        `WVETMAERAT`,
        ['Battle Card (Star),Battle Card']
    ),
    new CipherCode(
        '14',
        'Radar Missile 3',
        `NKWPEORLI`,
        ['Battle Card']
    ),
    new CipherCode(
        '15',
        'Mega Class +1 / 340',
        `OLSISKEYHIUMC`,
        ['Ability Wave']
    ),
    new CipherCode(
        '16',
        'Air Spread 1 *1',
        `STRAPOO`,
        ['Battle Card (Star),Battle Card']
    ),
    new CipherCode(
        '17',
        'Radar Missile 1 *1',
        `DRACELTTAB`,
        ['Battle Card (Star),Battle Card']
    ),
    new CipherCode(
        '18',
        'Silver Meteor',
        `ANMMEFC2GTESRAAOR`,
        ['Battle Card']
    ),
    new CipherCode(
        '19',
        'Image Eye',
        `AXIMSOEG`,
        ['Mega Weapon']
    ),
    new CipherCode(
        '20',
        'Deluxe Energy',
        `Solve the mysteries of the world!`,
        ['Sub Card']
    ),
    new CipherCode(
        '21',
        'Unlocker',
        `Crush those unidentified life forms!`,
        ['Sub Card']
    ),
    new CipherCode(
        '22',
        'Search Eye',
        `Make Brothers and increase your Link Power.`,
        ['Sub Card']
    ),
    new CipherCode(
        '23',
        'Attack Panel',
        `Activate Matter Waves with the Star Carrier.`,
        ['Battle Card']
    ),
    new CipherCode(
        '24',
        'Jet Ski 3',
        `Everyone's hero Mega Man!`,
        ['Battle Card']
    ),
    new CipherCode(
        '25',
        'Green Carpet',
        `Blaze through the EM Wave World!`,
        ['Battle Card']
    ),
    new CipherCode(
        '26',
        'Mad Vulcan 3',
        `Put together a killer Link Force Big Bang! (LFB)`,
        ['Battle Card']
    ),
    new CipherCode(
        '27',
        'Heat Upper 3',
        `Go anywhere in the world on the Sky Wave!`,
        ['Battle Card']
    ),
    new CipherCode(
        '28',
        'Snow Ball 3',
        `The galvanic blade of the Thunder Zerker!`,
        ['Battle Card']
    ),
    new CipherCode(
        '29',
        'Stealth Lazer 3',
        `The raging typhoon of the Wood Ninja!`,
        ['Battle Card']
    ),
    new CipherCode(
        '30',
        'Mummy Hand 3',
        `The burning flame of the Fire Saurian!`,
        ['Battle Card']
    ),
    new CipherCode(
        '31',
        'Squall 3',
        `The power of Brothers, Double Tribe!`,
        ['Battle Card']
    ),
    new CipherCode(
        '32',
        'Heat Grenade',
        `The Waves that make it real, Matter Waves!`,
        ['Battle Card']
    ),
    new CipherCode(
        '33',
        'Scythe 3',
        `Expand your Brother Band`,
        ['Battle Card']
    ),
    new CipherCode(
        '34',
        'Recover 300',
        `The legendary continent of Mu`,
        ['Battle Card']
    ),
    new CipherCode(
        '35',
        'Boo Hat 1 *1',
        `1 Game Card 2 versions`,
        ['Battle Card (Star),Battle Card']
    ),
    new CipherCode(
        '36',
        'White Meteor *1',
        `Increase your Link Power to add more abilities`,
        ['Battle Card (Star),Battle Card']
    ),
    new CipherCode(
        '37',
        'Silver Meteor *1',
        `The tribes of legend, Zerker, Ninja, and Saurian`,
        ['Battle Card (Star),Battle Card']
    ),
    new CipherCode(
        '38',
        'Sync Hook 3 *1',
        `Master the power of the OOPArt`,
        ['Battle Card (Star),Battle Card']
    ),
    new CipherCode(
        '39',
        'Under Shirt / 5',
        `12-17-2007, the 20th Anniversary of Mega Man!`,
        ['Ability Wave']
    ),
    new CipherCode(
        '40',
        'Charge Paralyze / 50',
        `Become the worldwide Wave Battle Champion!`,
        ['Ability Wave']
    ),
    new CipherCode(
        '41',
        'Charge Poison / 70',
        `Legendary Master Shin, he's down for whatever!`,
        ['Ability Wave']
    ),
    new CipherCode(
        '42',
        'HP +500 / 300',
        `Everybody say it loud! Legendary!`,
        ['Ability Wave']
    ),
    new CipherCode(
        '43',
        'Mega Class +1 / 170',
        `Lock on target with the Mega Attack`,
        ['Ability Wave']
    ),
    new CipherCode(
        '44',
        'Giga Class +1 / 250',
        `Everyone gather at the Sky-Hi Coliseum!`,
        ['Ability Wave']
    ),
    new CipherCode(
        '45',
        'Dark Phantom SP',
        `Waves become visible with the Visualizer!`,
        ['Battle Card']
    ),
    new CipherCode(
        '46',
        'Yeti Blizzard SP',
        `Which Tribe did you choose?`,
        ['Battle Card']
    ),
    new CipherCode(
        '47',
        'Rogue SP',
        `Geo's in a good mood lately.`,
        ['Battle Card']
    ),
    new CipherCode(
        '48',
        'Plesio Surf SP',
        `Geo and Mega make a great team!?`,
        ['Battle Card']
    ),
    new CipherCode(
        '49',
        'Terra Condor SP',
        `L-O-V-E I love you Sonia!`,
        ['Battle Card']
    ),
    new CipherCode(
        '50',
        'Hollow SP',
        `Lighten up, Prez!`,
        ['Battle Card']
    ),
    new CipherCode(
        '51',
        'Taurus Fire SP',
        `Bud loves his burgers!`,
        ['Battle Card']
    ),
    new CipherCode(
        '52',
        'Harp Note SP',
        `Zack's height is not listed in the Zackpedia`,
        ['Battle Card']
    ),
    new CipherCode(
        '53',
        'Queen Ophiuca SP',
        `Be my Brother!`,
        ['Battle Card']
    ),
    new CipherCode(
        '54',
        'Gemini Spark SP',
        `Hey, let's have a Wave Battle!`,
        ['Battle Card']
    ),
    new CipherCode(
        '55',
        'Cancer Bubble SP',
        `Battle over the Net in MEGA MAN STAR FORCE 2!`,
        ['Battle Card']
    ),
    new CipherCode(
        '56',
        'Kung Foo Kid SP',
        `Can you collect each and every Battle Card?`,
        ['Battle Card']
    ),
    new CipherCode(
        '57',
        'General Auriga SP',
        `Mega Man is on the air and coming to your TV!`,
        ['Battle Card']
    ),
    new CipherCode(
        '58',
        'Apollo Flame SP',
        `Turn the page to get the latest info!`,
        ['Battle Card']
    ),
    new CipherCode(
        '59',
        'Quick Ring',
        `Wave Battling, it's like a form of greeting!`,
        ['Mega Weapon']
    ),
    new CipherCode(
        '60',
        'Sanguine Claw',
        `Pull off a high-powered Best-Combo!`,
        ['Mega Weapon']
    ),
], sf2Config);