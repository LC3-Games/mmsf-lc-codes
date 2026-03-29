window.cipherCodes ??= {};

const sf3Config = new CipherCollectionConfig(
    'sf3',
    'Star Force 3'
);

/**
 * @see https://www.therockmanexezone.com/wiki/Cipher_Code_(MMSF3)
 */
window.cipherCodes[sf3Config.id] = new CipherCodeCollection([
    new CipherCode(
        '1',
        'Small Energy',
        'Alpha85072',
        ['Sub Card']
    ),
    new CipherCode(
        '2',
        'Small Energy',
        'Beta95104',
        ['Sub Card']
    ),
    new CipherCode(
        '3',
        'Small Energy',
        'Gamma19606',
        ['Sub Card']
    ),
    new CipherCode(
        '4',
        'Small Energy',
        'Delta51999',
        ['Sub Card']
    ),
    new CipherCode(
        '5',
        'Small Energy',
        'Alpha53637',
        ['Sub Card']
    ),
    new CipherCode(
        '6',
        'Invisible',
        'Beta86425',
        ['Battle Card']
    ),
    new CipherCode(
        '7',
        'AirSpread3',
        'Delta86531',
        ['Battle Card']
    ),
    new CipherCode(
        '8',
        'DivideLine',
        'Delta75148',
        ['Battle Card']
    ),
    new CipherCode(
        '9',
        'HP+50/110',
        'Epsilon07292',
        ['Ability Wave']
    ),
    new CipherCode(
        '10',
        'KiloBomb1',
        'Zeta78695',
        ['Battle Card (Illegal Card)', 'Battle Card']
    ),
    new CipherCode(
        '11',
        'Virus Claw',
        'Eta28274',
        ['W.E. Data']
    ),
    new CipherCode(
        '12',
        'Deluxe Energy',
        'Theta32596',
        ['Sub-Card']
    ),
    new CipherCode(
        '13',
        'Unlocker',
        'Iota20404',
        ['Sub-Card']
    ),
    new CipherCode(
        '14',
        'Search Eye',
        'Theta71782',
        ['Sub-Card']
    ),
    new CipherCode(
        '15',
        'BigDrop3',
        'Lamda09373',
        ['Battle Card']
    ),
    new CipherCode(
        '16',
        'Bushido3',
        'Mu13420',
        ['Battle Card']
    ),
    new CipherCode(
        '17',
        'MechFlame3',
        'Nu31121',
        ['Battle Card']
    ),
    new CipherCode(
        '18',
        'MadFire3',
        'Xi33819',
        ['Battle Card']
    ),
    new CipherCode(
        '19',
        'BubblHook3',
        'Omicron74574',
        ['Battle Card']
    ),
    new CipherCode(
        '20',
        'IceSpin3',
        'Pi95941',
        ['Battle Card']
    ),
    new CipherCode(
        '21',
        'ThndrHead3',
        'Rho17385',
        ['Battle Card']
    ),
    new CipherCode(
        '22',
        'FlashStrk3',
        'Sigma66019',
        ['Battle Card']
    ),
    new CipherCode(
        '23',
        'Shuriken3',
        'Tau78431',
        ['Battle Card']
    ),
    new CipherCode(
        '24',
        'AcornBomb3',
        'Upsilon79755',
        ['Battle Card']
    ),
    new CipherCode(
        '25',
        'MuTech3',
        'Phi24914',
        ['Battle Card']
    ),
    new CipherCode(
        '26',
        'DrillArm3',
        'Chi83559',
        ['Battle Card']
    ),
    new CipherCode(
        '27',
        'BeastSlap3',
        'Psi07280',
        ['Battle Card']
    ),
    new CipherCode(
        '28',
        'DblEater',
        'Omega42348',
        ['Battle Card']
    ),
    new CipherCode(
        '29',
        'SpadMgnesV3',
        'Alpha40352',
        ['Battle Card']
    ),
    new CipherCode(
        '30',
        'DiamndIceV3',
        'Beta20976',
        ['Battle Card']
    ),
    new CipherCode(
        '31',
        'ClubStrngV3',
        'Gamma31412',
        ['Battle Card']
    ),
    new CipherCode(
        '32',
        'QueenVrgoV3',
        'Delta18946',
        ['Battle Card']
    ),
    new CipherCode(
        '33',
        'JackCorvsV3',
        'Epsilon71083',
        ['Battle Card']
    ),
    new CipherCode(
        '34',
        'DreadJokrV3',
        'Zeta11702',
        ['Battle Card']
    ),
    new CipherCode(
        '35',
        'AcidAceV3',
        'Eta67300',
        ['Battle Card']
    ),
    new CipherCode(
        '36',
        'CygnsWingV3',
        'Theta78108',
        ['Battle Card']
    ),
    new CipherCode(
        '37',
        'WolfWoodsV3',
        'Iota16196',
        ['Battle Card']
    ),
    new CipherCode(
        '38',
        'DrkPhntmV3',
        'Kappa34080',
        ['Battle Card']
    ),
    new CipherCode(
        '39',
        'RogueV3',
        'Lamda72890',
        ['Battle Card']
    ),
    new CipherCode(
        '40',
        'MoonDstryV3',
        'Mu66767',
        ['Battle Card']
    ),
    new CipherCode(
        '41',
        'SiriusV3',
        'Nu73618',
        ['Battle Card']
    ),
    new CipherCode(
        '42',
        'MegaBoost',
        'Xi23308',
        ['Battle Card (Illegal Card)', 'Battle Card']
    ),
    new CipherCode(
        '43',
        'StrngSwngV3',
        'Omicron64221',
        ['Battle Card']
    ),
    new CipherCode(
        '44',
        'WickdFlame',
        'Pi62739',
        ['Battle Card (Illegal Card)', 'Battle Card']
    ),
    new CipherCode(
        '45',
        'HP+500/450',
        'Rho65958',
        ['Ability Wave']
    ),
    new CipherCode(
        '46',
        'AirShoes/260',
        'Sigma08312',
        ['Ability Wave']
    ),
    new CipherCode(
        '47',
        'MegCls+1/270',
        'Tau90338',
        ['Ability Wave']
    ),
    new CipherCode(
        '48',
        'GigCls+1/400',
        'Upsilon28454',
        ['Ability Wave']
    ),
    new CipherCode(
        '49',
        'AntiDmg/250',
        'Phi40588',
        ['Ability Wave']
    ),
    new CipherCode(
        '50',
        'Gale Claw',
        'Chi78584',
        ['W.E. Data']
    ),
    new CipherCode(
        '51',
        'Danger Ring',
        'Psi09659',
        ['W.E. Data']
    ),
    new CipherCode(
        '52',
        'BN Blaster EX',
        'Omega68805',
        ['W.E. Data']
    ),
], sf3Config);