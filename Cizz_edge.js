/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "height",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'BG_kuning',
                type: 'image',
                rect: ['-16px', '0px','9568px','1088px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"BG%20kuning.svg",'0px','0px'],
                transform: [[],[],[],['1.00627','1.11029']]
            },
            {
                id: 'Part02',
                type: 'rect',
                rect: ['-16', '-25','auto','auto','auto', 'auto']
            },
            {
                id: 'box22',
                type: 'image',
                rect: ['713px', '565px','101px','86px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"box22.svg",'0px','0px']
            },
            {
                id: 'ateppabrik',
                type: 'rect',
                rect: ['-808', '1284','auto','auto','auto', 'auto']
            },
            {
                id: 'Stage_time_settterCopy7',
                type: 'rect',
                rect: ['3632px', '-476px','760px','730px','auto', 'auto'],
                fill: ["rgba(192,192,192,1)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'awan01',
                type: 'rect',
                rect: ['234px', '-597','auto','auto','auto', 'auto'],
                filter: [0, 0, 2, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0],
                transform: [[],[],[],['1.10835','1.10835']]
            },
            {
                id: 'Pesawat',
                type: 'rect',
                rect: ['5814', '380','auto','auto','auto', 'auto']
            }],
            symbolInstances: [
            {
                id: 'ateppabrik',
                symbolName: 'ateppabrik',
                autoPlay: {

                }
            },
            {
                id: 'awan01',
                symbolName: 'awan01',
                autoPlay: {

                }
            },
            {
                id: 'Pesawat',
                symbolName: 'Pesawat_1',
                autoPlay: {

                }
            },
            {
                id: 'Part02',
                symbolName: 'Part02',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_ateppabrik}": [
                ["style", "top", '1294px'],
                ["style", "left", '-658px']
            ],
            "${_box22}": [
                ["style", "top", '565px'],
                ["transform", "scaleY", '0'],
                ["transform", "rotateZ", '-7deg'],
                ["style", "height", '86px'],
                ["transform", "scaleX", '0'],
                ["style", "left", '713px'],
                ["style", "width", '101px']
            ],
            "${_Part02}": [
                ["transform", "scaleX", '1'],
                ["transform", "scaleY", '1'],
                ["style", "top", '-30px']
            ],
            "${_Stage_time_settterCopy7}": [
                ["style", "opacity", '0']
            ],
            "${_awan01}": [
                ["style", "top", '-597px'],
                ["transform", "scaleY", '1.10835'],
                ["transform", "scaleX", '1.10835'],
                ["style", "left", '234px'],
                ["subproperty", "filter.contrast", '2']
            ],
            "${_Sapi22}": [
                ["style", "top", '429px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '1080px'],
                ["style", "width", '10000px']
            ],
            "${_Pesawat}": [
                ["style", "top", '440px'],
                ["transform", "scaleY", '0.85'],
                ["transform", "rotateZ", '0deg'],
                ["transform", "scaleX", '0.85'],
                ["style", "left", '5744px'],
                ["style", "-webkit-transform-origin", [36.57,85.81], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [36.57,85.81],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [36.57,85.81],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [36.57,85.81],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [36.57,85.81],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_BG_kuning}": [
                ["style", "top", '0px'],
                ["style", "left", '-16px'],
                ["transform", "scaleY", '1.11029'],
                ["transform", "scaleX", '1.00627']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1800000,
            autoPlay: false,
            timeline: [
                { id: "eid4301", tween: [ "style", "${_ateppabrik}", "left", '-658px', { fromValue: '-658px'}], position: 473162, duration: 0 },
                { id: "eid8380", tween: [ "style", "${_ateppabrik}", "left", '-662px', { fromValue: '-662px'}], position: 900000, duration: 0 },
                { id: "eid2331", tween: [ "transform", "${_Part02}", "scaleX", '1', { fromValue: '1'}], position: 546500, duration: 0 },
                { id: "eid32466", tween: [ "style", "${_Part02}", "top", '-25px', { fromValue: '-30px'}], position: 0, duration: 340000 },
                { id: "eid1614", tween: [ "style", "${_Part02}", "top", '675px', { fromValue: '-25px'}], position: 340000, duration: 30000 },
                { id: "eid3780", tween: [ "transform", "${_Pesawat}", "scaleY", '0.85', { fromValue: '0.85'}], position: 459446, duration: 0 },
                { id: "eid2857", tween: [ "style", "${_Pesawat}", "top", '252px', { fromValue: '440px'}], position: 367826, duration: 25980 },
                { id: "eid4079", tween: [ "style", "${_Pesawat}", "top", '-622px', { fromValue: '252px'}], position: 537387, duration: 38970 },
                { id: "eid4075", tween: [ "transform", "${_box22}", "scaleX", '1', { fromValue: '0'}], position: 490000, duration: 250 },
                { id: "eid4355", tween: [ "transform", "${_box22}", "scaleX", '0', { fromValue: '1'}], position: 622325, duration: 101 },
                { id: "eid2859", tween: [ "style", "${_Pesawat}", "left", '4641px', { fromValue: '5744px'}], position: 14969, duration: 5431 },
                { id: "eid2860", tween: [ "style", "${_Pesawat}", "left", '109px', { fromValue: '4641px'}], position: 20400, duration: 263429 },
                { id: "eid2332", tween: [ "transform", "${_Part02}", "scaleY", '1', { fromValue: '1'}], position: 546500, duration: 0 },
                { id: "eid2858", tween: [ "style", "${_Pesawat}", "-webkit-transform-origin", [36.57,85.81], { valueTemplate: '@@0@@% @@1@@%', fromValue: [36.57,85.81]}], position: 231829, duration: 0 },
                { id: "eid44146", tween: [ "style", "${_Pesawat}", "-moz-transform-origin", [36.57,85.81], { valueTemplate: '@@0@@% @@1@@%', fromValue: [36.57,85.81]}], position: 231829, duration: 0 },
                { id: "eid44147", tween: [ "style", "${_Pesawat}", "-ms-transform-origin", [36.57,85.81], { valueTemplate: '@@0@@% @@1@@%', fromValue: [36.57,85.81]}], position: 231829, duration: 0 },
                { id: "eid44148", tween: [ "style", "${_Pesawat}", "msTransformOrigin", [36.57,85.81], { valueTemplate: '@@0@@% @@1@@%', fromValue: [36.57,85.81]}], position: 231829, duration: 0 },
                { id: "eid44149", tween: [ "style", "${_Pesawat}", "-o-transform-origin", [36.57,85.81], { valueTemplate: '@@0@@% @@1@@%', fromValue: [36.57,85.81]}], position: 231829, duration: 0 },
                { id: "eid28889", tween: [ "style", "${_awan01}", "left", '-1326px', { fromValue: '234px'}], position: 330000, duration: 265000, easing: "easeInOutQuad" },
                { id: "eid4076", tween: [ "transform", "${_box22}", "scaleY", '1', { fromValue: '0'}], position: 490000, duration: 250 },
                { id: "eid4356", tween: [ "transform", "${_box22}", "scaleY", '0', { fromValue: '1'}], position: 622325, duration: 101 },
                { id: "eid91", tween: [ "style", "${_Sapi22}", "top", '429px', { fromValue: '429px'}], position: 3000, duration: 0 },
                { id: "eid10290", tween: [ "style", "${_Stage_time_settterCopy7}", "opacity", '0', { fromValue: '0'}], position: 1800000, duration: 0 },
                { id: "eid4554", tween: [ "transform", "${_box22}", "rotateZ", '-162deg', { fromValue: '-7deg'}], position: 520000, duration: 102325 },
                { id: "eid3779", tween: [ "transform", "${_Pesawat}", "scaleX", '0.85', { fromValue: '0.85'}], position: 459446, duration: 0 },
                { id: "eid2861", tween: [ "transform", "${_Pesawat}", "rotateZ", '-8deg', { fromValue: '0deg'}], position: 330000, duration: 31326 },
                { id: "eid2862", tween: [ "transform", "${_Pesawat}", "rotateZ", '0deg', { fromValue: '-8deg'}], position: 426162, duration: 25980 },
                { id: "eid28779", tween: [ "style", "${_awan01}", "top", '173px', { fromValue: '-597px'}], position: 330000, duration: 85000, easing: "easeInOutQuad" },
                { id: "eid28998", tween: [ "style", "${_awan01}", "top", '-527px', { fromValue: '173px'}], position: 537387, duration: 38970, easing: "easeInOutQuad" },
                { id: "eid10635", tween: [ "style", "${_ateppabrik}", "top", '1295px', { fromValue: '1294px'}], position: 0, duration: 283829 },
                { id: "eid11581", tween: [ "style", "${_ateppabrik}", "top", '1284px', { fromValue: '1295px'}], position: 283829, duration: 306171 },
                { id: "eid4275", tween: [ "style", "${_ateppabrik}", "top", '-1520px', { fromValue: '1284px'}], position: 590000, duration: 120000 }            ]
        }
    }
},
"Sapi2": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'sapi2_tail2',
                    type: 'image',
                    rect: ['493px', '124px', '75px', '84px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/sapi2_tail2.svg', '0px', '0px']
                },
                {
                    id: 'sapi2_body3',
                    type: 'image',
                    rect: ['51px', '77px', '480px', '288px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/sapi2_body3.svg', '0px', '0px']
                },
                {
                    id: 'sapi_head',
                    type: 'image',
                    rect: ['16px', '0px', '275px', '195px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/sapi_head.svg', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_sapi2_body3}": [
                ["style", "top", '77px'],
                ["style", "left", '51px']
            ],
            "${_sapi2_tail2}": [
                ["style", "-webkit-transform-origin", [0,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '122px'],
                ["style", "left", '490px'],
                ["transform", "rotateZ", '22deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '365px'],
                ["style", "width", '568px']
            ],
            "${_sapi_head}": [
                ["style", "top", '0px'],
                ["style", "left", '16px'],
                ["transform", "rotateZ", '0deg']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 3000,
            autoPlay: true,
            labels: {
                "a": 0
            },
            timeline: [
                { id: "eid14", tween: [ "transform", "${_sapi2_tail2}", "rotateZ", '15deg', { fromValue: '22deg'}], position: 0, duration: 750 },
                { id: "eid15", tween: [ "transform", "${_sapi2_tail2}", "rotateZ", '29deg', { fromValue: '15deg'}], position: 750, duration: 1500 },
                { id: "eid16", tween: [ "transform", "${_sapi2_tail2}", "rotateZ", '22deg', { fromValue: '29deg'}], position: 2250, duration: 750 },
                { id: "eid27", tween: [ "style", "${_sapi2_tail2}", "left", '490px', { fromValue: '490px'}], position: 1425, duration: 0 },
                { id: "eid11", tween: [ "transform", "${_sapi_head}", "rotateZ", '5deg', { fromValue: '0deg'}], position: 0, duration: 750, easing: "easeInQuad" },
                { id: "eid12", tween: [ "transform", "${_sapi_head}", "rotateZ", '-5deg', { fromValue: '5deg'}], position: 750, duration: 1500, easing: "easeInQuad" },
                { id: "eid13", tween: [ "transform", "${_sapi_head}", "rotateZ", '0deg', { fromValue: '-5deg'}], position: 2250, duration: 750, easing: "easeInQuad" }            ]
        }
    }
},
"Sapi2_1": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'sapi2_tail2',
                    type: 'image',
                    rect: ['493px', '124px', '75px', '84px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/sapi2_tail2.svg', '0px', '0px']
                },
                {
                    id: 'sapi2_body3',
                    type: 'image',
                    rect: ['51px', '77px', '480px', '288px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/sapi2_body3.svg', '0px', '0px']
                },
                {
                    id: 'sapi_head',
                    type: 'image',
                    rect: ['16px', '0px', '275px', '195px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/sapi_head.svg', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '365px'],
                ["style", "width", '568px']
            ],
            "${_sapi2_tail2}": [
                ["style", "top", '122px'],
                ["style", "-webkit-transform-origin", [0,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '490px'],
                ["transform", "rotateZ", '22deg']
            ],
            "${_sapi2_body3}": [
                ["style", "top", '77px'],
                ["style", "left", '51px']
            ],
            "${_sapi_head}": [
                ["style", "top", '96px'],
                ["style", "left", '16px'],
                ["transform", "rotateZ", '0deg']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 3000,
            autoPlay: true,
            labels: {
                "a": 0
            },
            timeline: [
                { id: "eid14", tween: [ "transform", "${_sapi2_tail2}", "rotateZ", '15deg', { fromValue: '22deg'}], position: 0, duration: 750 },
                { id: "eid15", tween: [ "transform", "${_sapi2_tail2}", "rotateZ", '29deg', { fromValue: '15deg'}], position: 750, duration: 1500 },
                { id: "eid16", tween: [ "transform", "${_sapi2_tail2}", "rotateZ", '22deg', { fromValue: '29deg'}], position: 2250, duration: 750 },
                { id: "eid63", tween: [ "style", "${_sapi_head}", "top", '96px', { fromValue: '96px'}], position: 0, duration: 0 },
                { id: "eid27", tween: [ "style", "${_sapi2_tail2}", "left", '490px', { fromValue: '490px'}], position: 1425, duration: 0 },
                { id: "eid11", tween: [ "transform", "${_sapi_head}", "rotateZ", '5deg', { fromValue: '0deg'}], position: 0, duration: 750 },
                { id: "eid12", tween: [ "transform", "${_sapi_head}", "rotateZ", '-5deg', { fromValue: '5deg'}], position: 750, duration: 1500 },
                { id: "eid13", tween: [ "transform", "${_sapi_head}", "rotateZ", '0deg', { fromValue: '-5deg'}], position: 2250, duration: 750 }            ]
        }
    }
},
"land2": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'land_22',
                    type: 'image',
                    rect: ['0px', '0px', '2581px', '728px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/land_22.svg', '0px', '0px']
                },
                {
                    id: 'Sapi2_1Copy',
                    type: 'rect',
                    rect: ['374px', '234px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'Sapi2_1Copy',
                symbolName: 'Sapi2_1',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_land_22}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_Sapi2_1Copy}": [
                ["transform", "scaleX", '0.27141'],
                ["style", "top", '3px'],
                ["style", "left", '-104px'],
                ["transform", "scaleY", '0.2652']
            ],
            "${symbolSelector}": [
                ["style", "height", '728px'],
                ["style", "width", '2581px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 3000,
            autoPlay: true,
            timeline: [
                { id: "eid78", tween: [ "transform", "${_Sapi2_1Copy}", "scaleX", '0.27141', { fromValue: '0.27141'}], position: 2363, duration: 0 },
                { id: "eid79", tween: [ "transform", "${_Sapi2_1Copy}", "scaleY", '0.2652', { fromValue: '0.2652'}], position: 2363, duration: 0 },
                { id: "eid76", tween: [ "style", "${_Sapi2_1Copy}", "left", '-104px', { fromValue: '-104px'}], position: 2363, duration: 0 },
                { id: "eid77", tween: [ "style", "${_Sapi2_1Copy}", "top", '3px', { fromValue: '3px'}], position: 2363, duration: 0 }            ]
        }
    }
},
"land1b": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'ateptank',
                    type: 'rect',
                    rect: ['4672', '160', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    type: 'image',
                    id: 'plane_land_depart2',
                    rect: ['5415px', '751px', '3984px', '215px', 'auto', 'auto'],
                    transform: [[0, 0], [], [], ['2.22489']],
                    fill: ['rgba(0,0,0,0)', 'images/plane_land%20depart2.svg', '0px', '0px']
                },
                {
                    id: 'KEJU2',
                    type: 'image',
                    rect: ['3537px', '627px', '219px', '134px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/KEJU2.svg', '0px', '0px']
                },
                {
                    id: 'BOX2',
                    type: 'image',
                    rect: ['5185px', '682px', '94px', '79px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/BOX2.svg', '0px', '0px']
                },
                {
                    id: 'SUSU2',
                    type: 'image',
                    rect: ['2453px', '515px', '164px', '253px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/SUSU2.svg', '0px', '0px']
                },
                {
                    id: 'land_12',
                    type: 'image',
                    rect: ['0px', '0px', '2617px', '941px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/land_12.svg', '0px', '0px']
                },
                {
                    id: 'tank_bg2',
                    type: 'image',
                    rect: ['2365px', '230px', '226px', '449px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'Scene%202/tank%20bg.svg', '0px', '0px']
                },
                {
                    id: 'tank_susu2',
                    type: 'image',
                    rect: ['2119px', '470px', '455px', '372px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'Scene%202/tank_susu.svg', '0px', '0px']
                },
                {
                    id: 'Sapi22',
                    type: 'rect',
                    rect: ['1504px', '603px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    rect: ['1714px', '808px', '94px', '89px', 'auto', 'auto'],
                    id: 'pipa_aliran_susu2',
                    type: 'image',
                    autoOrient: false,
                    fill: ['rgba(0,0,0,0)', 'Scene%202/pipa%20aliran%20susu.svg', '0px', '0px']
                },
                {
                    id: 'pipa_susu2',
                    type: 'image',
                    rect: ['1475px', '304px', '610px', '566px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'Scene%202/pipa%20susu.svg', '0px', '0px']
                },
                {
                    id: 'tank__alat2_lain2',
                    type: 'image',
                    rect: ['2021px', '8px', '3955px', '966px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'Scene%202/tank%20%26%20alat2%20lain.svg', '0px', '0px']
                },
                {
                    id: 'Sapi22Copy',
                    type: 'rect',
                    rect: ['1504px', '603px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'puteran2',
                    type: 'rect',
                    rect: ['2354', '464', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'lever',
                    type: 'image',
                    rect: ['3557px', '510px', '89px', '185px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/lever.svg', '0px', '0px']
                },
                {
                    id: 'plane_gate2',
                    type: 'image',
                    rect: ['5950px', '587px', '328px', '227px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/plane_gate2.svg', '0px', '0px']
                },
                {
                    rect: ['3632px', '-476px', '760px', '730px', 'auto', 'auto'],
                    id: 'Stage_time_settter',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,1)']
                },
                {
                    id: 'kacaPembesarCopy',
                    type: 'rect',
                    rect: ['1422', '591', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'kacaPembesar_1',
                    type: 'rect',
                    rect: ['4322', '279', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'QUIZ_1',
                    type: 'rect',
                    rect: ['2862', '455', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'Sapi22',
                symbolName: 'Sapi2',
                autoPlay: {

               }
            },
            {
                id: 'puteran2',
                symbolName: 'puteran',
                autoPlay: {

               }
            },
            {
                id: 'ateptank',
                symbolName: 'ateptank',
                autoPlay: {

               }
            },
            {
                id: 'Sapi22Copy',
                symbolName: 'Sapi2',
                autoPlay: {

               }
            },
            {
                id: 'kacaPembesarCopy',
                symbolName: 'kacaPembesar',
                autoPlay: {

               }
            },
            {
                id: 'QUIZ_1',
                symbolName: 'QUIZ_1',
                autoPlay: {

               }
            },
            {
                id: 'kacaPembesar_1',
                symbolName: 'kacaPembesar_1',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_KEJU2}": [
                ["style", "top", '627px'],
                ["style", "left", '3537px']
            ],
            "${_tank_susu2}": [
                ["style", "top", '470px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "-webkit-transform-origin", [99.15,51.88], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [99.15,51.88],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [99.15,51.88],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [99.15,51.88],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [99.15,51.88],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '2119px'],
                ["style", "width", '455px']
            ],
            "${_land_12}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "scaleX", '0.98508']
            ],
            "${_SUSU2}": [
                ["style", "top", '515px'],
                ["style", "left", '2453px']
            ],
            "${_BOX2}": [
                ["style", "top", '689px'],
                ["transform", "scaleY", '1'],
                ["transform", "rotateZ", '0deg'],
                ["style", "height", '79px'],
                ["transform", "scaleX", '1'],
                ["style", "left", '5185px'],
                ["style", "width", '94px']
            ],
            "${_Sapi22}": [
                ["transform", "scaleX", '0.90141'],
                ["style", "left", '1216px'],
                ["transform", "scaleY", '0.90141'],
                ["style", "top", '414px']
            ],
            "${_pipa_aliran_susu2}": [
                ["transform", "scaleX", '0'],
                ["transform", "scaleY", '0'],
                ["motion", "location", '1541px 748.5px']
            ],
            "${_plane_gate2}": [
                ["style", "-webkit-transform-origin", [81.1,21.15], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [81.1,21.15],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [81.1,21.15],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [81.1,21.15],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [81.1,21.15],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleY", '1'],
                ["transform", "rotateZ", '0deg'],
                ["transform", "scaleX", '1'],
                ["style", "left", '5964px'],
                ["style", "top", '587px']
            ],
            "${_tank__alat2_lain2}": [
                ["style", "left", '2021px'],
                ["style", "top", '8px']
            ],
            "${_QUIZ_1}": [
                ["style", "top", '351px'],
                ["style", "left", '2632px']
            ],
            "${_Stage_time_settter}": [
                ["style", "opacity", '0']
            ],
            "${_pipa_susu2}": [
                ["style", "top", '304px'],
                ["style", "height", '566px'],
                ["style", "left", '1475px'],
                ["style", "width", '610px']
            ],
            "${_kacaPembesarCopy}": [
                ["style", "left", '1105px'],
                ["style", "top", '327px']
            ],
            "${_plane_land_depart2}": [
                ["style", "top", '751px'],
                ["transform", "scaleX", '2.22489'],
                ["style", "left", '5415px'],
                ["style", "height", '215px']
            ],
            "${_lever}": [
                ["style", "top", '510px'],
                ["transform", "rotateZ", '17deg'],
                ["style", "height", '185px'],
                ["style", "-webkit-transform-origin", [56.18,80.54], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [56.18,80.54],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [56.18,80.54],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [56.18,80.54],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [56.18,80.54],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '3557px'],
                ["style", "width", '89px']
            ],
            "${_kacaPembesar_1}": [
                ["style", "left", '3944px'],
                ["style", "top", '284px']
            ],
            "${_Sapi22Copy}": [
                ["transform", "scaleX", '-0.54687'],
                ["style", "top", '321px'],
                ["style", "left", '666px'],
                ["transform", "scaleY", '0.54679']
            ],
            "${_tank_bg2}": [
                ["style", "left", '2365px'],
                ["style", "top", '230px']
            ],
            "${symbolSelector}": [
                ["style", "height", '941px'],
                ["style", "width", '2617px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1800000,
            autoPlay: false,
            timeline: [
                { id: "eid142", tween: [ "transform", "${_pipa_aliran_susu2}", "scaleX", '1', { fromValue: '0'}], position: 2000, duration: 11909 },
                { id: "eid992", tween: [ "style", "${_BOX2}", "left", '5990px', { fromValue: '5185px'}], position: 191640, duration: 29975 },
                { id: "eid1091", tween: [ "style", "${_BOX2}", "left", '6131px', { fromValue: '5990px'}], position: 221615, duration: 18239 },
                { id: "eid67", tween: [ "transform", "${_Sapi22Copy}", "scaleY", '0.54679', { fromValue: '0.54679'}], position: 128280, duration: 0 },
                { id: "eid58", tween: [ "style", "${_Sapi22}", "left", '1216px', { fromValue: '1216px'}], position: 125000, duration: 0 },
                { id: "eid64", tween: [ "style", "${_Sapi22Copy}", "left", '666px', { fromValue: '666px'}], position: 128280, duration: 0 },
                { id: "eid32182", tween: [ "style", "${_kacaPembesarCopy}", "left", '1105px', { fromValue: '1105px'}], position: 0, duration: 0 },
                { id: "eid36139", tween: [ "style", "${_QUIZ_1}", "top", '351px', { fromValue: '351px'}], position: 0, duration: 0 },
                { id: "eid1551", tween: [ "transform", "${_plane_gate2}", "scaleY", '0', { fromValue: '1'}], position: 263284, duration: 4425 },
                { id: "eid352", tween: [ "style", "${_tank_susu2}", "-webkit-transform-origin", [99.15,51.88], { valueTemplate: '@@0@@% @@1@@%', fromValue: [99.15,51.88]}], position: 125000, duration: 0 },
                { id: "eid44150", tween: [ "style", "${_tank_susu2}", "-moz-transform-origin", [99.15,51.88], { valueTemplate: '@@0@@% @@1@@%', fromValue: [99.15,51.88]}], position: 125000, duration: 0 },
                { id: "eid44151", tween: [ "style", "${_tank_susu2}", "-ms-transform-origin", [99.15,51.88], { valueTemplate: '@@0@@% @@1@@%', fromValue: [99.15,51.88]}], position: 125000, duration: 0 },
                { id: "eid44152", tween: [ "style", "${_tank_susu2}", "msTransformOrigin", [99.15,51.88], { valueTemplate: '@@0@@% @@1@@%', fromValue: [99.15,51.88]}], position: 125000, duration: 0 },
                { id: "eid44153", tween: [ "style", "${_tank_susu2}", "-o-transform-origin", [99.15,51.88], { valueTemplate: '@@0@@% @@1@@%', fromValue: [99.15,51.88]}], position: 125000, duration: 0 },
                { id: "eid708", tween: [ "style", "${_KEJU2}", "left", '4605px', { fromValue: '3537px'}], position: 144113, duration: 47527 },
                { id: "eid633", tween: [ "style", "${_SUSU2}", "left", '3349px', { fromValue: '2453px'}], position: 90000, duration: 47527 },
                { id: "eid165", tween: [ "transform", "${_tank_susu2}", "scaleX", '0.9104', { fromValue: '1'}], position: 55000, duration: 22966 },
                { id: "eid204", tween: [ "transform", "${_tank_susu2}", "scaleX", '0.6', { fromValue: '0.9104'}], position: 77966, duration: 12034 },
                { id: "eid1086", tween: [ "transform", "${_BOX2}", "rotateZ", '-34deg', { fromValue: '0deg'}], position: 217300, duration: 4315 },
                { id: "eid1090", tween: [ "style", "${_BOX2}", "top", '564px', { fromValue: '689px'}], position: 221615, duration: 18239 },
                { id: "eid119", tween: [ "motion", "${_pipa_aliran_susu2}", [[1541, 748.5, 0, 0],[1562.57, 808.97, 24.52, 43.38, 46.17, 81.68],[1593, 840.5, 0, 0]]], position: 2000, duration: 6805 },
                { id: "eid120", tween: [ "motion", "${_pipa_aliran_susu2}", [[1593, 840.5, 0, 0],[1726, 854.29, 236.93, -32.79, 122.08, -16.9],[1877, 814.5, 0, 0]]], position: 8805, duration: 12367 },
                { id: "eid121", tween: [ "motion", "${_pipa_aliran_susu2}", [[1877, 814.5, 0, 0],[1914.06, 753.23, 41, -111.51, 33.17, -90.21],[1931, 434.5, 0, 0]]], position: 21172, duration: 18517 },
                { id: "eid122", tween: [ "motion", "${_pipa_aliran_susu2}", [[1931, 434.5, 0, 0],[1948, 363.2, 28.39, -67.35, 35.34, -83.83],[1974, 332.5, 0, 0]]], position: 39689, duration: 7721 },
                { id: "eid123", tween: [ "motion", "${_pipa_aliran_susu2}", [[1974, 332.5, 0, 0],[2036.02, 319.92, 98.36, -1.77, 54.12, -0.98],[2085, 330.5, 0, 0]]], position: 47410, duration: 7590 },
                { id: "eid61", tween: [ "transform", "${_Sapi22}", "scaleX", '0.90141', { fromValue: '0.90141'}], position: 125000, duration: 0 },
                { id: "eid1525", tween: [ "transform", "${_plane_gate2}", "rotateZ", '47deg', { fromValue: '0deg'}], position: 252901, duration: 14395 },
                { id: "eid62", tween: [ "transform", "${_Sapi22}", "scaleY", '0.90141', { fromValue: '0.90141'}], position: 125000, duration: 0 },
                { id: "eid157", tween: [ "transform", "${_tank_susu2}", "scaleY", '1', { fromValue: '1'}], position: 90000, duration: 0 },
                { id: "eid1447", tween: [ "transform", "${_BOX2}", "scaleX", '0', { fromValue: '1'}], position: 242278, duration: 1062 },
                { id: "eid32181", tween: [ "style", "${_kacaPembesarCopy}", "top", '327px', { fromValue: '327px'}], position: 0, duration: 0 },
                { id: "eid155", tween: [ "style", "${_tank_susu2}", "top", '431px', { fromValue: '470px'}], position: 55000, duration: 22966 },
                { id: "eid203", tween: [ "style", "${_tank_susu2}", "top", '297px', { fromValue: '431px'}], position: 77966, duration: 12034 },
                { id: "eid1448", tween: [ "transform", "${_BOX2}", "scaleY", '0', { fromValue: '1'}], position: 242278, duration: 1062 },
                { id: "eid1550", tween: [ "transform", "${_plane_gate2}", "scaleX", '0', { fromValue: '1'}], position: 263284, duration: 4425 },
                { id: "eid59", tween: [ "style", "${_Sapi22}", "top", '414px', { fromValue: '414px'}], position: 125000, duration: 0 },
                { id: "eid1495", tween: [ "transform", "${_lever}", "rotateZ", '-17deg', { fromValue: '17deg'}], position: 132574, duration: 8695 },
                { id: "eid1496", tween: [ "transform", "${_lever}", "rotateZ", '19deg', { fromValue: '-17deg'}], position: 141269, duration: 6076 },
                { id: "eid1497", tween: [ "transform", "${_lever}", "rotateZ", '-43deg', { fromValue: '19deg'}], position: 147346, duration: 5603 },
                { id: "eid10374", tween: [ "style", "${_Stage_time_settter}", "opacity", '0', { fromValue: '0'}], position: 1800000, duration: 0 },
                { id: "eid1577", tween: [ "style", "${_plane_gate2}", "left", '5964px', { fromValue: '5964px'}], position: 255987, duration: 0 },
                { id: "eid65", tween: [ "style", "${_Sapi22Copy}", "top", '321px', { fromValue: '321px'}], position: 128280, duration: 0 },
                { id: "eid36140", tween: [ "style", "${_QUIZ_1}", "left", '2632px', { fromValue: '2632px'}], position: 0, duration: 0 },
                { id: "eid32465", tween: [ "style", "${_kacaPembesar_1}", "top", '284px', { fromValue: '284px'}], position: 0, duration: 0 },
                { id: "eid32464", tween: [ "style", "${_kacaPembesar_1}", "left", '3944px', { fromValue: '3944px'}], position: 0, duration: 0 },
                { id: "eid198", tween: [ "transform", "${_land_12}", "scaleX", '0.98508', { fromValue: '0.98508'}], position: 50000, duration: 0 },
                { id: "eid143", tween: [ "transform", "${_pipa_aliran_susu2}", "scaleY", '1', { fromValue: '0'}], position: 2000, duration: 11909 },
                { id: "eid66", tween: [ "transform", "${_Sapi22Copy}", "scaleX", '-0.54687', { fromValue: '-0.54687'}], position: 128280, duration: 0 }            ]
        }
    }
},
"BGpabrik": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    id: 'pabrik_BG2',
                    rect: ['22px', '30px', '3037px', '1080px', 'auto', 'auto'],
                    transform: [[0, 0], [], [], ['1', '1.05555']],
                    fill: ['rgba(0,0,0,0)', 'Scene%202/pabrik%20BG.svg', '0px', '0px']
                },
                {
                    id: 'tank_tiang_BG_pabrik3Copy3',
                    type: 'image',
                    rect: ['0px', '25px', '3096px', '1080px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'Scene%202/tank_tiang%20BG%20pabrik.svg', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_tank_tiang_BG_pabrik3Copy3}": [
                ["style", "left", '0px'],
                ["style", "top", '25px']
            ],
            "${symbolSelector}": [
                ["style", "height", '1140px'],
                ["style", "width", '3096px']
            ],
            "${_pabrik_BG2}": [
                ["style", "top", '30px'],
                ["style", "left", '22px'],
                ["transform", "scaleY", '1.05555']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"puteran": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'puteranCopy2',
                    type: 'image',
                    rect: ['0px', '0px', '124px', '128px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/puteran.svg', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_puteranCopy2}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '1'],
                ["transform", "rotateZ", '0deg'],
                ["transform", "scaleX", '1'],
                ["style", "left", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '128px'],
                ["style", "width", '124px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 7000,
            autoPlay: true,
            labels: {
                "a": 0
            },
            timeline: [
                { id: "eid547", tween: [ "transform", "${_puteranCopy2}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 0, duration: 7000 }            ]
        }
    }
},
"Pesawat": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'plane_wheels2',
                    type: 'image',
                    rect: ['600px', '379px', '778px', '200px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/plane_wheels2.svg', '0px', '0px']
                },
                {
                    id: 'plane_body2',
                    type: 'image',
                    rect: ['0px', '0px', '1720px', '613px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/plane_body2.svg', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '613px'],
                ["style", "width", '1720px']
            ],
            "${_plane_body2}": [
                ["style", "top", '0px'],
                ["style", "left", '0px']
            ],
            "${_plane_wheels2}": [
                ["style", "top", '379px'],
                ["style", "left", '600px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 105000,
            autoPlay: false,
            timeline: [
                { id: "eid1666", tween: [ "style", "${_plane_wheels2}", "top", '207px', { fromValue: '379px'}], position: 100000, duration: 5000 }            ]
        }
    }
},
"ateptank": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'tank_atep_32',
                    type: 'image',
                    rect: ['0px', '-3px', '653px', '210px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'Scene%202/tank_atep%203.svg', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_tank_atep_32}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '210px'],
                ["style", "width", '653px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2529,
            autoPlay: true,
            labels: {
                "a": 0
            },
            timeline: [
                { id: "eid1358", tween: [ "style", "${_tank_atep_32}", "top", '10px', { fromValue: '0px'}], position: 529, duration: 500 },
                { id: "eid1359", tween: [ "style", "${_tank_atep_32}", "top", '-10px', { fromValue: '10px'}], position: 1029, duration: 1000 },
                { id: "eid1361", tween: [ "style", "${_tank_atep_32}", "top", '0px', { fromValue: '-10px'}], position: 2029, duration: 500 }            ]
        }
    }
},
"Part02": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'awan_part2',
                    type: 'image',
                    rect: ['839px', '25px', '1224px', '310px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/awan%20part2.svg', '0px', '0px']
                },
                {
                    id: 'plane_town22',
                    type: 'image',
                    rect: ['5148px', '405px', '2713px', '535px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/plane_town22.svg', '0px', '0px']
                },
                {
                    id: 'plane_town12',
                    type: 'image',
                    rect: ['5478px', '395px', '2942px', '684px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/plane_town12.svg', '0px', '0px']
                },
                {
                    id: 'land_32',
                    type: 'image',
                    rect: ['0px', '351px', '2065px', '482px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/land_32.svg', '0px', '0px']
                },
                {
                    id: 'land22',
                    type: 'rect',
                    rect: ['10px', '397px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'BGpabrik',
                    type: 'rect',
                    rect: ['2229px', '0px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'pabrik_layer_blkg2',
                    type: 'image',
                    rect: ['2934px', '544px', '2194px', '589px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'Scene%202/pabrik_layer%20blkg.svg', '0px', '0px']
                },
                {
                    id: 'pabrik_layer_dpn2',
                    type: 'image',
                    rect: ['2522px', '442px', '1756px', '683px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'Scene%202/pabrik_layer%20dpn.svg', '0px', '0px']
                },
                {
                    id: 'land1b',
                    type: 'rect',
                    rect: ['-8px', '176px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'kacaPembesar_22Copy3',
                    type: 'rect',
                    rect: ['880', '-425', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'Sapi2_1',
                    type: 'rect',
                    rect: ['384px', '631px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    rect: ['3632px', '-476px', '760px', '730px', 'auto', 'auto'],
                    id: 'Stage_time_settterCopy6',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,1)']
                }
            ],
            symbolInstances: [
            {
                id: 'land1b',
                symbolName: 'land1b',
                autoPlay: {

               }
            },
            {
                id: 'land22',
                symbolName: 'land2',
                autoPlay: {

               }
            },
            {
                id: 'kacaPembesar_22Copy3',
                symbolName: 'kacaPembesar_pesawat',
                autoPlay: {

               }
            },
            {
                id: 'BGpabrik',
                symbolName: 'BGpabrik',
                autoPlay: {

               }
            },
            {
                id: 'Sapi2_1',
                symbolName: 'Sapi2_1',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_pabrik_layer_dpn2}": [
                ["style", "top", '442px'],
                ["style", "left", '2281px'],
                ["style", "width", '1592px']
            ],
            "${_land_32}": [
                ["style", "left", '0px'],
                ["style", "top", '351px']
            ],
            "${_land1b}": [
                ["style", "top", '172px'],
                ["style", "left", '-5px']
            ],
            "${_kacaPembesar_22Copy3}": [
                ["style", "top", '442px'],
                ["style", "left", '5756px']
            ],
            "${_plane_town12}": [
                ["style", "left", '5478px'],
                ["style", "top", '395px']
            ],
            "${_plane_town22}": [
                ["style", "top", '405px'],
                ["style", "opacity", '1'],
                ["style", "left", '5148px'],
                ["style", "width", '2713px']
            ],
            "${_pabrik_layer_blkg2}": [
                ["style", "top", '543px'],
                ["style", "left", '2393px'],
                ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_land22}": [
                ["style", "top", '377px'],
                ["style", "left", '6px']
            ],
            "${symbolSelector}": [
                ["style", "height", '1140px'],
                ["style", "width", '8420px']
            ],
            "${_Sapi2_1}": [
                ["transform", "scaleX", '-1.27'],
                ["style", "left", '208px'],
                ["transform", "scaleY", '1.26997'],
                ["style", "top", '650px']
            ],
            "${_BGpabrik}": [
                ["style", "left", '2229px'],
                ["style", "top", '0px']
            ],
            "${_awan_part2}": [
                ["style", "top", '105px'],
                ["subproperty", "filter.contrast", '2'],
                ["style", "height", '310px'],
                ["style", "width", '1224px'],
                ["style", "left", '839px'],
                ["subproperty", "filter.saturate", '0']
            ],
            "${_Stage_time_settterCopy6}": [
                ["style", "opacity", '0']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2539662,
            autoPlay: false,
            timeline: [
                { id: "eid1481", tween: [ "style", "${_land1b}", "left", '-571px', { fromValue: '-92px'}], position: 0, duration: 30000 },
                { id: "eid631", tween: [ "style", "${_land1b}", "left", '-6808px', { fromValue: '-571px'}], position: 30000, duration: 450000 },
                { id: "eid421", tween: [ "style", "${_land22}", "left", '-4677px', { fromValue: '6px'}], position: 0, duration: 360000 },
                { id: "eid10289", tween: [ "style", "${_Stage_time_settterCopy6}", "opacity", '0', { fromValue: '0'}], position: 1800000, duration: 0 },
                { id: "eid151", tween: [ "transform", "${_Sapi2_1}", "scaleX", '-1.27', { fromValue: '-1.27'}], position: 0, duration: 0 },
                { id: "eid29654", tween: [ "subproperty", "${_awan_part2}", "filter.contrast", '2', { fromValue: '2'}], position: 0, duration: 0 },
                { id: "eid29655", tween: [ "subproperty", "${_awan_part2}", "filter.contrast", '2', { fromValue: '2'}], position: 870000, duration: 0 },
                { id: "eid379", tween: [ "style", "${_pabrik_layer_blkg2}", "left", '-3513px', { fromValue: '2393px'}], position: 0, duration: 480000 },
                { id: "eid32596", tween: [ "style", "${_kacaPembesar_22Copy3}", "top", '442px', { fromValue: '442px'}], position: 0, duration: 0 },
                { id: "eid809", tween: [ "style", "${_plane_town22}", "left", '-262px', { fromValue: '5148px'}], position: 0, duration: 480000 },
                { id: "eid808", tween: [ "style", "${_plane_town12}", "top", '399px', { fromValue: '395px'}], position: 0, duration: 0 },
                { id: "eid891", tween: [ "style", "${_plane_town22}", "top", '495px', { fromValue: '405px'}], position: 0, duration: 480000 },
                { id: "eid152", tween: [ "transform", "${_Sapi2_1}", "scaleY", '1.26997', { fromValue: '1.26997'}], position: 0, duration: 0 },
                { id: "eid108", tween: [ "style", "${_Sapi2_1}", "left", '-7264px', { fromValue: '194px'}], position: 0, duration: 480000 },
                { id: "eid807", tween: [ "style", "${_plane_town12}", "left", '-2072px', { fromValue: '5478px'}], position: 0, duration: 480000 },
                { id: "eid1492", tween: [ "style", "${_pabrik_layer_dpn2}", "width", '1592px', { fromValue: '1592px'}], position: 6405, duration: 0 },
                { id: "eid373", tween: [ "style", "${_BGpabrik}", "left", '-4323px', { fromValue: '2229px'}], position: 0, duration: 480000 },
                { id: "eid29765", tween: [ "style", "${_awan_part2}", "top", '105px', { fromValue: '105px'}], position: 0, duration: 0 },
                { id: "eid573", tween: [ "style", "${_pabrik_layer_blkg2}", "top", '543px', { fromValue: '543px'}], position: 480000, duration: 0 },
                { id: "eid32597", tween: [ "style", "${_kacaPembesar_22Copy3}", "left", '650px', { fromValue: '5756px'}], position: 0, duration: 360000 },
                { id: "eid32706", tween: [ "style", "${_kacaPembesar_22Copy3}", "left", '-834px', { fromValue: '650px'}], position: 360000, duration: 120000 },
                { id: "eid378", tween: [ "style", "${_pabrik_layer_dpn2}", "left", '2368px', { fromValue: '2281px'}], position: 0, duration: 6405 },
                { id: "eid1491", tween: [ "style", "${_pabrik_layer_dpn2}", "left", '-3974px', { fromValue: '2368px'}], position: 6405, duration: 473595 },
                { id: "eid95", tween: [ "style", "${_land22}", "top", '377px', { fromValue: '377px'}], position: 0, duration: 0 },
                { id: "eid29544", tween: [ "style", "${_awan_part2}", "left", '-7881px', { fromValue: '839px'}], position: 0, duration: 870000 },
                { id: "eid422", tween: [ "style", "${_land_32}", "left", '-3789px', { fromValue: '0px'}], position: 0, duration: 360000 },
                { id: "eid9124", tween: [ "style", "${_plane_town22}", "opacity", '1', { fromValue: '1'}], position: 2539662, duration: 0 },
                { id: "eid29656", tween: [ "subproperty", "${_awan_part2}", "filter.saturate", '0', { fromValue: '0'}], position: 0, duration: 0 },
                { id: "eid12323", tween: [ "style", "${_land1b}", "top", '191px', { fromValue: '172px'}], position: 0, duration: 480000 },
                { id: "eid423", tween: [ "style", "${_land_32}", "top", '350px', { fromValue: '351px'}], position: 0, duration: 360000 },
                { id: "eid380", tween: [ "style", "${_pabrik_layer_blkg2}", "-webkit-transform-origin", [-118.55,50.97], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 0, duration: 480000 },
                { id: "eid44154", tween: [ "style", "${_pabrik_layer_blkg2}", "-moz-transform-origin", [-118.55,50.97], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 0, duration: 480000 },
                { id: "eid44155", tween: [ "style", "${_pabrik_layer_blkg2}", "-ms-transform-origin", [-118.55,50.97], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 0, duration: 480000 },
                { id: "eid44156", tween: [ "style", "${_pabrik_layer_blkg2}", "msTransformOrigin", [-118.55,50.97], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 0, duration: 480000 },
                { id: "eid44157", tween: [ "style", "${_pabrik_layer_blkg2}", "-o-transform-origin", [-118.55,50.97], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 0, duration: 480000 }            ]
        }
    }
},
"Pesawat_1": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'plane_wheels2',
                    type: 'image',
                    rect: ['600px', '379px', '778px', '200px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/plane_wheels2.svg', '0px', '0px']
                },
                {
                    id: 'plane_body2',
                    type: 'image',
                    rect: ['0px', '0px', '1720px', '613px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/plane_body2.svg', '0px', '0px']
                },
                {
                    rect: ['3632px', '-476px', '760px', '730px', 'auto', 'auto'],
                    id: 'Stage_time_settterCopy2',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Stage_time_settterCopy2}": [
                ["style", "opacity", '0']
            ],
            "${symbolSelector}": [
                ["style", "height", '613px'],
                ["style", "width", '1720px']
            ],
            "${_plane_body2}": [
                ["style", "top", '0px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px']
            ],
            "${_plane_wheels2}": [
                ["style", "left", '600px'],
                ["style", "top", '379px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1800500,
            autoPlay: false,
            timeline: [
                { id: "eid10376", tween: [ "style", "${_Stage_time_settterCopy2}", "opacity", '0', { fromValue: '0'}], position: 1800500, duration: 0 },
                { id: "dg75", tween: [ "style", "${_plane_wheels2}", "top", '207px', { fromValue: '379px'}], position: 361326, duration: 34813 }            ]
        }
    }
},
"ateppabrik": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'mainTRACK_22',
                    type: 'rect',
                    rect: ['367px', '1412px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'bg_dapur_2',
                    type: 'image',
                    rect: ['2254px', '1763px', '4751px', '985px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/bg_dapur_2.svg', '0px', '0px']
                },
                {
                    id: 'box_jatuh_12',
                    type: 'image',
                    rect: ['1524px', '1632px', '82px', '82px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/box%20jatuh%201.svg', '0px', '0px']
                },
                {
                    id: '_03_atep',
                    type: 'image',
                    rect: ['0px', '0px', '5574px', '1722px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/03%20atep.svg', '0px', '0px']
                },
                {
                    rect: ['227px', '1796px', '9396px', '1023px', 'auto', 'auto'],
                    id: 'bg_dapur_1',
                    transform: [[], [], [], ['1', '1.01955']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/bg%20dapur%201.svg', '0px', '0px']
                },
                {
                    id: 'mainTRACK',
                    type: 'rect',
                    rect: ['-276', '1412px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'mangkok4',
                    type: 'rect',
                    rect: ['644', '2159', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'final_package',
                    type: 'image',
                    rect: ['1486px', '2171px', '283px', '117px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/final%20package.svg', '0px', '0px']
                },
                {
                    id: 'mainTRACK_1',
                    type: 'rect',
                    rect: ['367px', '1412px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'atepdoang',
                    type: 'image',
                    rect: ['-32px', '1351px', '5574px', '156px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/atepdoang.svg', '0px', '0px']
                },
                {
                    rect: ['3632px', '-476px', '760px', '730px', 'auto', 'auto'],
                    id: 'Stage_time_settterCopy8',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,1)']
                },
                {
                    id: 'delivery_truck',
                    type: 'rect',
                    rect: ['10300px', '1649px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'bgoutroo',
                    type: 'rect',
                    rect: ['15687', '1449', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'BORDER_OUTRO2',
                    type: 'image',
                    rect: ['2884px', '1370px', '305px', '1359px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/BORDER%20OUTRO.svg', '0px', '0px']
                },
                {
                    id: 'MEJA2',
                    type: 'image',
                    rect: ['3334px', '2291px', '735px', '551px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/MEJA.svg', '0px', '0px']
                },
                {
                    id: 'charOutro',
                    type: 'rect',
                    rect: ['5284px', '1906px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'kursi2',
                    type: 'image',
                    rect: ['16524px', '2197px', '489px', '696px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/kursi.svg', '0px', '0px']
                },
                {
                    id: 'plate2',
                    type: 'image',
                    rect: ['906px', '2294px', '263px', '99px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/plate.svg', '0px', '0px']
                },
                {
                    id: 'cocholatecake2',
                    type: 'image',
                    rect: ['955px', '2210px', '180px', '156px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/cocholatecake.svg', '0px', '0px']
                },
                {
                    id: 'lingkaran_titik2',
                    type: 'rect',
                    transform: [[], [], [], ['1.31206', '1.31206']],
                    rect: ['973px', '2230px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'circularBUTTON-outro',
                    type: 'rect',
                    rect: ['894px', '2149px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'mainTRACK_1',
                symbolName: 'mainTRACK_1',
                autoPlay: {

               }
            },
            {
                id: 'lingkaran_titik2',
                symbolName: 'lingkaran_titik2',
                autoPlay: {

               }
            },
            {
                id: 'delivery_truck',
                symbolName: 'delivery_truck',
                autoPlay: {

               }
            },
            {
                id: 'mangkok4',
                symbolName: 'mangkok',
                autoPlay: {

               }
            },
            {
                id: 'mainTRACK_22',
                symbolName: 'mainTRACK_2',
                autoPlay: {

               }
            },
            {
                id: 'charOutro',
                symbolName: 'charOutro',
                autoPlay: {

               }
            },
            {
                id: 'bgoutroo',
                symbolName: 'bgoutroo',
                autoPlay: {

               }
            },
            {
                id: 'circularBUTTON-outro',
                symbolName: 'circularBUTTON-outro',
                autoPlay: {

               }
            },
            {
                id: 'mainTRACK',
                symbolName: 'mainTRACK',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_final_package}": [
                ["style", "top", '2171px'],
                ["style", "opacity", '0'],
                ["style", "left", '1423px']
            ],
            "${_circularBUTTON-outro}": [
                ["transform", "scaleX", '0'],
                ["transform", "scaleY", '0']
            ],
            "${_BORDER_OUTRO2}": [
                ["style", "left", '15544px'],
                ["style", "top", '1370px']
            ],
            "${__03_atep}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_bg_dapur_1}": [
                ["style", "top", '1796px'],
                ["transform", "scaleY", '1.01955'],
                ["style", "left", '227px']
            ],
            "${symbolSelector}": [
                ["style", "height", '3089px'],
                ["style", "width", '10000px'],
                ["style", "overflow", 'visible']
            ],
            "${_atepdoang}": [
                ["style", "top", '1351px'],
                ["style", "left", '-32px']
            ],
            "${_delivery_truck}": [
                ["style", "-webkit-transform-origin", [51.35,91.05], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [51.35,91.05],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [51.35,91.05],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [51.35,91.05],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [51.35,91.05],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleY", '0.89336'],
                ["transform", "scaleX", '0.89336'],
                ["style", "left", '9204px'],
                ["style", "top", '1649px']
            ],
            "${_Stage_time_settterCopy8}": [
                ["style", "opacity", '0']
            ],
            "${_kursi2}": [
                ["style", "height", '696px'],
                ["style", "top", '2197px'],
                ["style", "left", '16524px'],
                ["style", "width", '489px']
            ],
            "${_box_jatuh_12}": [
                ["style", "top", '1607px'],
                ["style", "-webkit-transform-origin", [49.02,75.84], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [49.02,75.84],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [49.02,75.84],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [49.02,75.84],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [49.02,75.84],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleY", '1'],
                ["style", "height", '107px'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '1'],
                ["style", "left", '1524px'],
                ["style", "width", '82px']
            ],
            "${_charOutro}": [
                ["style", "top", '1906px'],
                ["style", "opacity", '0'],
                ["style", "left", '5284px']
            ],
            "${_mainTRACK}": [
                ["style", "top", '1412px'],
                ["style", "opacity", '1'],
                ["style", "left", '368px'],
                ["style", "overflow", 'visible']
            ],
            "${_bg_dapur_2}": [
                ["style", "top", '1763px'],
                ["style", "left", '2254px']
            ],
            "${_plate2}": [
                ["style", "top", '2294px'],
                ["transform", "scaleY", '0'],
                ["style", "height", '99px'],
                ["transform", "scaleX", '0'],
                ["style", "left", '906px'],
                ["style", "width", '263px']
            ],
            "${_mangkok4}": [
                ["style", "top", '2159px'],
                ["style", "opacity", '1'],
                ["style", "left", '-96px']
            ],
            "${_mainTRACK_22}": [
                ["style", "left", '368px'],
                ["style", "top", '1412px']
            ],
            "${_MEJA2}": [
                ["style", "left", '15924px'],
                ["style", "top", '2291px']
            ],
            "${_lingkaran_titik2}": [
                ["transform", "scaleX", '0'],
                ["style", "left", '974px'],
                ["transform", "scaleY", '0'],
                ["style", "top", '2232px']
            ],
            "${_mainTRACK_1}": [
                ["style", "top", '1412px'],
                ["style", "opacity", '1'],
                ["style", "left", '368px']
            ],
            "${_cocholatecake2}": [
                ["style", "top", '2210px'],
                ["transform", "scaleY", '0'],
                ["style", "-webkit-transform-origin", [53.89,83.33], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [53.89,83.33],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [53.89,83.33],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [53.89,83.33],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [53.89,83.33],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "height", '156px'],
                ["transform", "scaleX", '0'],
                ["style", "left", '955px'],
                ["style", "width", '180px']
            ],
            "${_bgoutroo}": [
                ["style", "left", '15695px'],
                ["style", "top", '1441px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1800000,
            autoPlay: false,
            timeline: [
                { id: "eid42836", tween: [ "style", "${_bgoutroo}", "top", '1441px', { fromValue: '1441px'}], position: 1580691, duration: 0 },
                { id: "eid17268", tween: [ "style", "${_mangkok4}", "left", '887px', { fromValue: '-96px'}], position: 630000, duration: 80000 },
                { id: "eid20166", tween: [ "style", "${_mangkok4}", "left", '1384px', { fromValue: '887px'}], position: 710000, duration: 40000 },
                { id: "eid24747", tween: [ "style", "${_mangkok4}", "left", '1382px', { fromValue: '1384px'}], position: 1259993, duration: 0 },
                { id: "eid9446", tween: [ "style", "${_bg_dapur_1}", "left", '-8803px', { fromValue: '227px'}], position: 750000, duration: 510000 },
                { id: "eid19989", tween: [ "style", "${_bg_dapur_1}", "left", '-10433px', { fromValue: '-8803px'}], position: 1260000, duration: 90000 },
                { id: "eid24790", tween: [ "transform", "${_delivery_truck}", "scaleY", '0.47113', { fromValue: '0.89336'}], position: 1320000, duration: 60000 },
                { id: "eid5136", tween: [ "transform", "${_box_jatuh_12}", "scaleY", '1.87', { fromValue: '1'}], position: 675000, duration: 16938 },
                { id: "eid5142", tween: [ "transform", "${_box_jatuh_12}", "scaleY", '0.96', { fromValue: '1.87'}], position: 691938, duration: 5646 },
                { id: "eid5148", tween: [ "transform", "${_box_jatuh_12}", "scaleY", '1.32', { fromValue: '0.96'}], position: 697584, duration: 6416 },
                { id: "eid24752", tween: [ "style", "${_final_package}", "opacity", '1', { fromValue: '0'}], position: 1259993, duration: 5007 },
                { id: "eid25527", tween: [ "style", "${_final_package}", "opacity", '0', { fromValue: '1'}], position: 1319945, duration: 55 },
                { id: "eid39596", tween: [ "transform", "${_cocholatecake2}", "scaleX", '0.75', { fromValue: '0'}], position: 1500000, duration: 11429 },
                { id: "eid39603", tween: [ "transform", "${_cocholatecake2}", "scaleX", '1.14999', { fromValue: '0.75'}], position: 1511429, duration: 11429 },
                { id: "eid39604", tween: [ "transform", "${_cocholatecake2}", "scaleX", '1', { fromValue: '1.14999'}], position: 1522857, duration: 22144 },
                { id: "eid27900", tween: [ "style", "${_kursi2}", "left", '5374px', { fromValue: '16524px'}], position: 750000, duration: 660347, easing: "easeInOutQuart" },
                { id: "eid27901", tween: [ "style", "${_kursi2}", "left", '1344px', { fromValue: '5374px'}], position: 1422135, duration: 77865, easing: "easeInOutQuart" },
                { id: "eid25162", tween: [ "style", "${_delivery_truck}", "left", '854px', { fromValue: '9204px'}], position: 960000, duration: 360000 },
                { id: "eid25404", tween: [ "style", "${_delivery_truck}", "left", '1084px', { fromValue: '854px'}], position: 1320000, duration: 60000 },
                { id: "eid28484", tween: [ "style", "${_charOutro}", "opacity", '1', { fromValue: '0'}], position: 1422120, duration: 15, easing: "easeInOutQuart" },
                { id: "eid42835", tween: [ "style", "${_bgoutroo}", "left", '15695px', { fromValue: '15695px'}], position: 1580691, duration: 0 },
                { id: "eid24528", tween: [ "style", "${_mangkok4}", "opacity", '1', { fromValue: '1'}], position: 0, duration: 0 },
                { id: "eid24637", tween: [ "style", "${_mangkok4}", "opacity", '1', { fromValue: '1'}], position: 710000, duration: 0 },
                { id: "eid24638", tween: [ "style", "${_mangkok4}", "opacity", '1', { fromValue: '1'}], position: 1110000, duration: 0 },
                { id: "eid19904", tween: [ "style", "${_mangkok4}", "opacity", '0', { fromValue: '1'}], position: 1260000, duration: 11 },
                { id: "eid27167", tween: [ "style", "${_MEJA2}", "left", '4754px', { fromValue: '15924px'}], position: 750000, duration: 660000, easing: "easeInOutQuart" },
                { id: "eid27204", tween: [ "style", "${_MEJA2}", "left", '677px', { fromValue: '4754px'}], position: 1422135, duration: 77865, easing: "easeInOutQuart" },
                { id: "eid41193", tween: [ "style", "${_lingkaran_titik2}", "top", '2232px', { fromValue: '2232px'}], position: 1545001, duration: 0, easing: "easeOutBack" },
                { id: "eid9576", tween: [ "style", "${__03_atep}", "left", '-5760px', { fromValue: '0px'}], position: 750000, duration: 240000 },
                { id: "eid15954", tween: [ "style", "${_bg_dapur_2}", "left", '-4586px', { fromValue: '2254px'}], position: 750000, duration: 510000 },
                { id: "eid19990", tween: [ "style", "${_bg_dapur_2}", "left", '-5906px', { fromValue: '-4586px'}], position: 1260000, duration: 90000 },
                { id: "eid28482", tween: [ "style", "${_charOutro}", "left", '1264px', { fromValue: '5284px'}], position: 1422135, duration: 77865, easing: "easeInOutQuart" },
                { id: "eid41192", tween: [ "style", "${_lingkaran_titik2}", "left", '974px', { fromValue: '974px'}], position: 1545001, duration: 0, easing: "easeOutBack" },
                { id: "eid13426", tween: [ "style", "${_mainTRACK_1}", "left", '368px', { fromValue: '368px'}], position: 150000, duration: 0 },
                { id: "eid13425", tween: [ "style", "${_mainTRACK_1}", "left", '-7617px', { fromValue: '367px'}], position: 750000, duration: 510000 },
                { id: "eid26328", tween: [ "style", "${_mainTRACK_1}", "left", '-12217px', { fromValue: '-7617px'}], position: 1260000, duration: 150000 },
                { id: "eid21751", tween: [ "style", "${_mainTRACK}", "opacity", '0', { fromValue: '1'}], position: 1259993, duration: 7 },
                { id: "eid40897", tween: [ "transform", "${_lingkaran_titik2}", "scaleY", '2.07802', { fromValue: '0'}], position: 1504998, duration: 40003, easing: "easeOutBack" },
                { id: "eid5137", tween: [ "transform", "${_box_jatuh_12}", "scaleX", '0.81', { fromValue: '1'}], position: 675000, duration: 16938 },
                { id: "eid5141", tween: [ "transform", "${_box_jatuh_12}", "scaleX", '1.7', { fromValue: '0.81'}], position: 691938, duration: 5646 },
                { id: "eid5147", tween: [ "transform", "${_box_jatuh_12}", "scaleX", '1.25', { fromValue: '1.7'}], position: 697584, duration: 6416 },
                { id: "eid39597", tween: [ "transform", "${_cocholatecake2}", "scaleY", '1.25', { fromValue: '0'}], position: 1500000, duration: 11429 },
                { id: "eid39602", tween: [ "transform", "${_cocholatecake2}", "scaleY", '0.85', { fromValue: '1.25'}], position: 1511429, duration: 11429 },
                { id: "eid39605", tween: [ "transform", "${_cocholatecake2}", "scaleY", '1', { fromValue: '0.85'}], position: 1522857, duration: 22144 },
                { id: "eid40401", tween: [ "transform", "${_plate2}", "scaleX", '1', { fromValue: '0'}], position: 1490000, duration: 14998, easing: "easeInOutBack" },
                { id: "eid40896", tween: [ "transform", "${_lingkaran_titik2}", "scaleX", '2.07802', { fromValue: '0'}], position: 1504998, duration: 40003, easing: "easeOutBack" },
                { id: "eid5132", tween: [ "style", "${_box_jatuh_12}", "top", '2452px', { fromValue: '1607px'}], position: 675000, duration: 22584 },
                { id: "eid7935", tween: [ "style", "${_mainTRACK}", "left", '367px', { fromValue: '368px'}], position: 150000, duration: 0 },
                { id: "eid6059", tween: [ "style", "${_mainTRACK}", "left", '-7618px', { fromValue: '367px'}], position: 750000, duration: 510000 },
                { id: "eid25813", tween: [ "style", "${_mainTRACK}", "left", '-12217px', { fromValue: '-7618px'}], position: 1260000, duration: 150748 },
                { id: "eid20165", tween: [ "style", "${_mangkok4}", "top", '2156px', { fromValue: '2159px'}], position: 630000, duration: 80000 },
                { id: "eid42719", tween: [ "transform", "${_circularBUTTON-outro}", "scaleX", '0.75', { fromValue: '0'}], position: 1500000, duration: 11429 },
                { id: "eid42720", tween: [ "transform", "${_circularBUTTON-outro}", "scaleX", '1.14999', { fromValue: '0.75'}], position: 1511429, duration: 11428 },
                { id: "eid42721", tween: [ "transform", "${_circularBUTTON-outro}", "scaleX", '1', { fromValue: '1.14999'}], position: 1522857, duration: 22144 },
                { id: "eid40398", tween: [ "transform", "${_plate2}", "scaleY", '1', { fromValue: '0'}], position: 1490000, duration: 14998, easing: "easeInOutBack" },
                { id: "eid42722", tween: [ "transform", "${_circularBUTTON-outro}", "scaleY", '1.25', { fromValue: '0'}], position: 1500000, duration: 11429 },
                { id: "eid42723", tween: [ "transform", "${_circularBUTTON-outro}", "scaleY", '0.85', { fromValue: '1.25'}], position: 1511429, duration: 11428 },
                { id: "eid42724", tween: [ "transform", "${_circularBUTTON-outro}", "scaleY", '1', { fromValue: '0.85'}], position: 1522857, duration: 22144 },
                { id: "eid5138", tween: [ "style", "${_box_jatuh_12}", "height", '107px', { fromValue: '107px'}], position: 701000, duration: 0 },
                { id: "eid20174", tween: [ "style", "${_mainTRACK_22}", "left", '-7616px', { fromValue: '368px'}], position: 750000, duration: 510000 },
                { id: "eid20175", tween: [ "style", "${_mainTRACK_22}", "left", '-12217px', { fromValue: '-7616px'}], position: 1260000, duration: 150000 },
                { id: "eid26582", tween: [ "style", "${_BORDER_OUTRO2}", "left", '2884px', { fromValue: '15544px'}], position: 750000, duration: 660000 },
                { id: "eid26622", tween: [ "style", "${_BORDER_OUTRO2}", "left", '2884px', { fromValue: '2884px'}], position: 1410000, duration: 0 },
                { id: "eid26803", tween: [ "style", "${_BORDER_OUTRO2}", "left", '194px', { fromValue: '2884px'}], position: 1422135, duration: 77865, easing: "easeInOutQuart" },
                { id: "eid10307", tween: [ "style", "${_Stage_time_settterCopy8}", "opacity", '0', { fromValue: '0'}], position: 1800000, duration: 0 },
                { id: "eid5126", tween: [ "style", "${_box_jatuh_12}", "left", '1524px', { fromValue: '1524px'}], position: 675000, duration: 0 },
                { id: "eid24789", tween: [ "style", "${_delivery_truck}", "-webkit-transform-origin", [51.35,91.05], { valueTemplate: '@@0@@% @@1@@%', fromValue: [51.35,91.05]}], position: 0, duration: 0 },
                { id: "eid44158", tween: [ "style", "${_delivery_truck}", "-moz-transform-origin", [51.35,91.05], { valueTemplate: '@@0@@% @@1@@%', fromValue: [51.35,91.05]}], position: 0, duration: 0 },
                { id: "eid44159", tween: [ "style", "${_delivery_truck}", "-ms-transform-origin", [51.35,91.05], { valueTemplate: '@@0@@% @@1@@%', fromValue: [51.35,91.05]}], position: 0, duration: 0 },
                { id: "eid44160", tween: [ "style", "${_delivery_truck}", "msTransformOrigin", [51.35,91.05], { valueTemplate: '@@0@@% @@1@@%', fromValue: [51.35,91.05]}], position: 0, duration: 0 },
                { id: "eid44161", tween: [ "style", "${_delivery_truck}", "-o-transform-origin", [51.35,91.05], { valueTemplate: '@@0@@% @@1@@%', fromValue: [51.35,91.05]}], position: 0, duration: 0 },
                { id: "eid9626", tween: [ "style", "${_box_jatuh_12}", "opacity", '0', { fromValue: '1'}], position: 735000, duration: 74 },
                { id: "eid24792", tween: [ "transform", "${_delivery_truck}", "scaleX", '0.47113', { fromValue: '0.89336'}], position: 1320000, duration: 60000 }            ]
        }
    }
},
"mainTRACK": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: true,
    content: {
            dom: [
                {
                    id: 'bg_freezer2',
                    type: 'image',
                    rect: ['7366px', '277px', '637px', '754px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/bg_freezer.svg', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'bg_oven_new_22',
                    rect: ['5540px', '348px', '763px', '635px', 'auto', 'auto'],
                    transform: [[0, 0], [], [], ['0.64351', '0.64351']],
                    fill: ['rgba(0,0,0,0)', 'images/bg_oven%20new%202.svg', '0px', '0px']
                },
                {
                    id: 'api3',
                    type: 'rect',
                    transform: [[0, 0], [], [], ['1.13913', '1.13913']],
                    rect: ['5708px', '517px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    type: 'image',
                    id: 'bubuk_tepung',
                    rect: ['3660px', '335px', '132px', '357px', 'auto', 'auto'],
                    transform: [[0, 0], ['42'], [], ['1', '0.41899']],
                    fill: ['rgba(0,0,0,0)', 'images/bubuk%20tepung.svg', '0px', '0px']
                },
                {
                    id: 'tepung',
                    type: 'rect',
                    rect: ['3337', '45px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: '_03_main_track',
                    type: 'image',
                    rect: ['0px', '-1px', '10507px', '1276px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/03%20main%20track.svg', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'telor',
                    rect: ['2373px', '457px', '30px', '75px', 'auto', 'auto'],
                    transform: [[0, 0], [], [], ['2.69']],
                    fill: ['rgba(0,0,0,0)', 'images/telor.svg', '0px', '0px']
                },
                {
                    id: 'tanganKIRI',
                    type: 'image',
                    rect: ['2063px', '78px', '349px', '487px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/tanganKIRI.svg', '0px', '0px']
                },
                {
                    id: 'tanganKANAN',
                    type: 'image',
                    rect: ['2372px', '78px', '348px', '488px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/tanganKANAN.svg', '0px', '0px']
                },
                {
                    rect: ['4614px', '535px', '80px', '154px', 'auto', 'auto'],
                    transform: [[0, 0], ['20'], [], ['0.20541']],
                    id: 'krim_keju_baru',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(255,227,132,1.00)']
                },
                {
                    id: 'semprotan2',
                    type: 'rect',
                    rect: ['4585px', '53', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    rect: ['3632px', '-476px', '760px', '730px', 'auto', 'auto'],
                    id: 'Stage_time_settterCopy9',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,1)']
                }
            ],
            symbolInstances: [
            {
                id: 'api3',
                symbolName: 'api',
                autoPlay: {

               }
            },
            {
                id: 'tepung',
                symbolName: 'tepung',
                autoPlay: {

               }
            },
            {
                id: 'semprotan2',
                symbolName: 'semprotan',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_bg_oven_new_22}": [
                ["style", "top", '348px'],
                ["transform", "scaleX", '0.64351'],
                ["transform", "scaleY", '0.64351'],
                ["style", "left", '5540px']
            ],
            "${_telor}": [
                ["style", "-webkit-transform-origin", [50,90.67], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,90.67],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,90.67],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,90.67],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,90.67],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleY", '1'],
                ["style", "top", '446px'],
                ["style", "height", '75px'],
                ["transform", "scaleX", '0.7'],
                ["style", "left", '2376px'],
                ["style", "width", '30px']
            ],
            "${_api3}": [
                ["style", "top", '517px'],
                ["style", "left", '5708px'],
                ["transform", "scaleY", '1.13913'],
                ["transform", "scaleX", '1.13913']
            ],
            "${__03_main_track}": [
                ["style", "top", '-1px'],
                ["style", "left", '0px']
            ],
            "${_tanganKIRI}": [
                ["style", "-webkit-transform-origin", [18.62,-0.82], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [18.62,-0.82],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [18.62,-0.82],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [18.62,-0.82],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [18.62,-0.82],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '78px'],
                ["style", "left", '2063px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_tepung}": [
                ["style", "-webkit-transform-origin", [9.07,-2.1], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [9.07,-2.1],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [9.07,-2.1],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [9.07,-2.1],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [9.07,-2.1],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '45px'],
                ["transform", "rotateZ", '-13deg']
            ],
            "${_Stage_time_settterCopy9}": [
                ["style", "opacity", '0']
            ],
            "${symbolSelector}": [
                ["style", "height", '1276px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '10507px']
            ],
            "${_bubuk_tepung}": [
                ["style", "top", '321px'],
                ["transform", "scaleY", '0.41899'],
                ["transform", "rotateZ", '15deg'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["style", "left", '3670px'],
                ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_semprotan2}": [
                ["style", "-webkit-transform-origin", [67.09,-1.93], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [67.09,-1.93],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [67.09,-1.93],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [67.09,-1.93],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [67.09,-1.93],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '-283px'],
                ["transform", "rotateZ", '17deg']
            ],
            "${_bg_freezer2}": [
                ["style", "top", '277px'],
                ["style", "left", '7366px'],
                ["style", "-webkit-transform-origin", [54.95,34.48], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [54.95,34.48],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [54.95,34.48],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [54.95,34.48],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [54.95,34.48],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_tanganKANAN}": [
                ["style", "-webkit-transform-origin", [82.18,-0.41], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [82.18,-0.41],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [82.18,-0.41],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [82.18,-0.41],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [82.18,-0.41],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '78px'],
                ["style", "left", '2372px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_krim_keju_baru}": [
                ["color", "background-color", 'rgba(255,184,30,1.00)'],
                ["transform", "rotateZ", '20deg'],
                ["transform", "scaleX", '0.20541'],
                ["style", "opacity", '0'],
                ["style", "left", '4662px'],
                ["style", "width", '80px'],
                ["style", "top", '541px'],
                ["transform", "scaleY", '1'],
                ["style", "height", '154px'],
                ["style", "-webkit-transform-origin", [39.86,-23.08], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [39.86,-23.08],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [39.86,-23.08],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [39.86,-23.08],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [39.86,-23.08],{valueTemplate:'@@0@@% @@1@@%'}]
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1800000,
            autoPlay: false,
            timeline: [
                { id: "eid24418", tween: [ "transform", "${_telor}", "scaleY", '1', { fromValue: '1'}], position: 793168, duration: 0 },
                { id: "eid24419", tween: [ "transform", "${_telor}", "scaleY", '1', { fromValue: '1'}], position: 794843, duration: 0 },
                { id: "eid7077", tween: [ "transform", "${_telor}", "scaleY", '2.06', { fromValue: '1'}], position: 797623, duration: 24289 },
                { id: "eid7081", tween: [ "transform", "${_telor}", "scaleY", '0', { fromValue: '2.06'}], position: 821912, duration: 3029 },
                { id: "eid16433", tween: [ "style", "${_krim_keju_baru}", "left", '4603px', { fromValue: '4662px'}], position: 960000, duration: 8000 },
                { id: "eid16434", tween: [ "style", "${_krim_keju_baru}", "top", '700px', { fromValue: '541px'}], position: 960000, duration: 8000 },
                { id: "eid12793", tween: [ "style", "${_bubuk_tepung}", "-webkit-transform-origin", [44.31,76.39], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 901501, duration: 361 },
                { id: "eid44162", tween: [ "style", "${_bubuk_tepung}", "-moz-transform-origin", [44.31,76.39], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 901501, duration: 361 },
                { id: "eid44163", tween: [ "style", "${_bubuk_tepung}", "-ms-transform-origin", [44.31,76.39], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 901501, duration: 361 },
                { id: "eid44164", tween: [ "style", "${_bubuk_tepung}", "msTransformOrigin", [44.31,76.39], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 901501, duration: 361 },
                { id: "eid44165", tween: [ "style", "${_bubuk_tepung}", "-o-transform-origin", [44.31,76.39], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 901501, duration: 361 },
                { id: "eid7067", tween: [ "transform", "${_tanganKIRI}", "rotateZ", '20deg', { fromValue: '0deg'}], position: 793383, duration: 22472 },
                { id: "eid13822", tween: [ "transform", "${_semprotan2}", "rotateZ", '0deg', { fromValue: '17deg'}], position: 920000, duration: 40000 },
                { id: "eid12779", tween: [ "transform", "${_tepung}", "rotateZ", '5deg', { fromValue: '-13deg'}], position: 870000, duration: 34476, easing: "easeOutQuad" },
                { id: "eid7074", tween: [ "style", "${_telor}", "top", '787px', { fromValue: '446px'}], position: 797623, duration: 27318 },
                { id: "eid12859", tween: [ "style", "${_bubuk_tepung}", "opacity", '1', { fromValue: '0'}], position: 889849, duration: 151 },
                { id: "eid12788", tween: [ "style", "${_bubuk_tepung}", "top", '555px', { fromValue: '321px'}], position: 890000, duration: 11501 },
                { id: "eid12795", tween: [ "style", "${_bubuk_tepung}", "top", '540px', { fromValue: '555px'}], position: 901501, duration: 361 },
                { id: "eid7070", tween: [ "transform", "${_tanganKANAN}", "rotateZ", '-20deg', { fromValue: '0deg'}], position: 793383, duration: 22472 },
                { id: "eid13820", tween: [ "style", "${_semprotan2}", "top", '53px', { fromValue: '-283px'}], position: 920000, duration: 40000 },
                { id: "eid16432", tween: [ "style", "${_krim_keju_baru}", "opacity", '1', { fromValue: '0'}], position: 959557, duration: 577 },
                { id: "eid16438", tween: [ "transform", "${_krim_keju_baru}", "scaleY", '0', { fromValue: '1'}], position: 967721, duration: 7350 },
                { id: "eid24416", tween: [ "transform", "${_telor}", "scaleX", '2.69', { fromValue: '0.7'}], position: 793168, duration: 1675 },
                { id: "eid7078", tween: [ "transform", "${_telor}", "scaleX", '3.29', { fromValue: '2.69'}], position: 797623, duration: 27257 },
                { id: "eid7082", tween: [ "transform", "${_telor}", "scaleX", '0', { fromValue: '3.29'}], position: 824880, duration: 61 },
                { id: "eid10308", tween: [ "style", "${_Stage_time_settterCopy9}", "opacity", '0', { fromValue: '0'}], position: 1800000, duration: 0 },
                { id: "eid7073", tween: [ "style", "${_telor}", "left", '2376px', { fromValue: '2376px'}], position: 824941, duration: 0 },
                { id: "eid12790", tween: [ "transform", "${_bubuk_tepung}", "rotateZ", '15deg', { fromValue: '15deg'}], position: 901501, duration: 0 },
                { id: "eid16435", tween: [ "style", "${_krim_keju_baru}", "-webkit-transform-origin", [39.86,-23.08], { valueTemplate: '@@0@@% @@1@@%', fromValue: [39.86,-23.08]}], position: 967721, duration: 0 },
                { id: "eid44166", tween: [ "style", "${_krim_keju_baru}", "-moz-transform-origin", [39.86,-23.08], { valueTemplate: '@@0@@% @@1@@%', fromValue: [39.86,-23.08]}], position: 967721, duration: 0 },
                { id: "eid44167", tween: [ "style", "${_krim_keju_baru}", "-ms-transform-origin", [39.86,-23.08], { valueTemplate: '@@0@@% @@1@@%', fromValue: [39.86,-23.08]}], position: 967721, duration: 0 },
                { id: "eid44168", tween: [ "style", "${_krim_keju_baru}", "msTransformOrigin", [39.86,-23.08], { valueTemplate: '@@0@@% @@1@@%', fromValue: [39.86,-23.08]}], position: 967721, duration: 0 },
                { id: "eid44169", tween: [ "style", "${_krim_keju_baru}", "-o-transform-origin", [39.86,-23.08], { valueTemplate: '@@0@@% @@1@@%', fromValue: [39.86,-23.08]}], position: 967721, duration: 0 },
                { id: "eid22388", tween: [ "color", "${_krim_keju_baru}", "background-color", 'rgba(255,184,30,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,184,30,1.00)'}], position: 965000, duration: 0 },
                { id: "eid12787", tween: [ "style", "${_bubuk_tepung}", "left", '3456px', { fromValue: '3670px'}], position: 890000, duration: 11501 },
                { id: "eid12794", tween: [ "style", "${_bubuk_tepung}", "left", '3397px', { fromValue: '3456px'}], position: 901501, duration: 361 },
                { id: "eid12776", tween: [ "style", "${_tepung}", "-webkit-transform-origin", [9.07,-2.1], { valueTemplate: '@@0@@% @@1@@%', fromValue: [9.07,-2.1]}], position: 870000, duration: 0 },
                { id: "eid44170", tween: [ "style", "${_tepung}", "-moz-transform-origin", [9.07,-2.1], { valueTemplate: '@@0@@% @@1@@%', fromValue: [9.07,-2.1]}], position: 870000, duration: 0 },
                { id: "eid44171", tween: [ "style", "${_tepung}", "-ms-transform-origin", [9.07,-2.1], { valueTemplate: '@@0@@% @@1@@%', fromValue: [9.07,-2.1]}], position: 870000, duration: 0 },
                { id: "eid44172", tween: [ "style", "${_tepung}", "msTransformOrigin", [9.07,-2.1], { valueTemplate: '@@0@@% @@1@@%', fromValue: [9.07,-2.1]}], position: 870000, duration: 0 },
                { id: "eid44173", tween: [ "style", "${_tepung}", "-o-transform-origin", [9.07,-2.1], { valueTemplate: '@@0@@% @@1@@%', fromValue: [9.07,-2.1]}], position: 870000, duration: 0 },
                { id: "eid12784", tween: [ "transform", "${_bubuk_tepung}", "scaleY", '1.09913', { fromValue: '0.41899'}], position: 890000, duration: 11501 },
                { id: "eid12796", tween: [ "transform", "${_bubuk_tepung}", "scaleY", '0', { fromValue: '1.09913'}], position: 901501, duration: 1499 },
                { id: "eid12789", tween: [ "transform", "${_bubuk_tepung}", "scaleX", '1.19844', { fromValue: '1'}], position: 890000, duration: 11501 },
                { id: "eid12797", tween: [ "transform", "${_bubuk_tepung}", "scaleX", '0', { fromValue: '1.19844'}], position: 901501, duration: 1499 }            ]
        }
    }
},
"tepung": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'tepung2',
                    type: 'image',
                    rect: ['195px', '213px', '426px', '382px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/tepung2.svg', '0px', '0px']
                },
                {
                    id: 'tepung1',
                    type: 'image',
                    rect: ['0px', '0px', '251px', '322px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/tepung1.svg', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_tepung2}": [
                ["style", "top", '213px'],
                ["style", "-webkit-transform-origin", [-0.13,14.24], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [-0.13,14.24],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [-0.13,14.24],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [-0.13,14.24],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [-0.13,14.24],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '195px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_tepung1}": [
                ["style", "top", '0px'],
                ["style", "left", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '595px'],
                ["style", "width", '621px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 890000,
            autoPlay: true,
            timeline: [
                { id: "eid12781", tween: [ "transform", "${_tepung2}", "rotateZ", '10deg', { fromValue: '0deg'}], position: 875512, duration: 14488, easing: "easeOutQuad" }            ]
        }
    }
},
"mainTRACK_1": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: true,
    content: {
            dom: [
                {
                    id: '_03_main_track',
                    type: 'image',
                    rect: ['0px', '0px', '10507px', '1276px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/03%20main%20track.svg', '0px', '0px']
                },
                {
                    type: 'rect',
                    id: 'Stage_time_settterCopy9',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    rect: ['3632px', '-476px', '760px', '730px', 'auto', 'auto'],
                    fill: ['rgba(192,192,192,1)']
                },
                {
                    id: 'jarum2',
                    type: 'image',
                    rect: ['5607px', '152px', '23px', '50px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/jarum.svg', '0px', '0px']
                },
                {
                    id: 'kacaPembesar_dapur',
                    type: 'rect',
                    rect: ['2824', '124', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'kacaPembesar_dapuroven',
                    type: 'rect',
                    rect: ['6264', '328', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'kacaPembesar_dapur_packing',
                    type: 'rect',
                    rect: ['10412', '768', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'QUIZ_3',
                    type: 'rect',
                    rect: ['3880px', '928px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'kacaPembesar_dapuroven',
                symbolName: 'kacaPembesar_dapuroven',
                autoPlay: {

               }
            },
            {
                id: 'kacaPembesar_dapur',
                symbolName: 'kacaPembesar_dapur',
                autoPlay: {

               }
            },
            {
                id: 'kacaPembesar_dapur_packing',
                symbolName: 'kacaPembesar_dapur_packing',
                autoPlay: {

               }
            },
            {
                id: 'QUIZ_3',
                symbolName: 'QUIZ_3',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_Stage_time_settterCopy9}": [
                ["style", "opacity", '0']
            ],
            "${_kacaPembesar_dapuroven}": [
                ["style", "left", '6084px'],
                ["style", "top", '832px']
            ],
            "${_jarum2}": [
                ["style", "top", '152px'],
                ["style", "-webkit-transform-origin", [62.32,78.67], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [62.32,78.67],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [62.32,78.67],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [62.32,78.67],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [62.32,78.67],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '5607px'],
                ["transform", "rotateZ", '120deg']
            ],
            "${__03_main_track}": [
                ["style", "top", '0px'],
                ["style", "left", '0px']
            ],
            "${_QUIZ_3}": [
                ["style", "left", '3880px'],
                ["style", "top", '928px']
            ],
            "${_kacaPembesar_dapur_packing}": [
                ["style", "top", '448px'],
                ["style", "left", '9556px']
            ],
            "${symbolSelector}": [
                ["style", "height", '1276px'],
                ["style", "width", '10507px'],
                ["style", "overflow", 'hidden']
            ],
            "${_kacaPembesar_dapur}": [
                ["style", "left", '2732px'],
                ["style", "top", '508px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1800000,
            autoPlay: false,
            timeline: [
                { id: "eid10308", tween: [ "style", "${_Stage_time_settterCopy9}", "opacity", '0', { fromValue: '0'}], position: 1800000, duration: 0 },
                { id: "eid32824", tween: [ "style", "${_kacaPembesar_dapur_packing}", "left", '9556px', { fromValue: '9556px'}], position: 0, duration: 0 },
                { id: "eid32823", tween: [ "style", "${_kacaPembesar_dapur_packing}", "top", '448px', { fromValue: '448px'}], position: 0, duration: 0 },
                { id: "eid32817", tween: [ "style", "${_kacaPembesar_dapur}", "left", '2732px', { fromValue: '2732px'}], position: 0, duration: 0 },
                { id: "eid32818", tween: [ "style", "${_kacaPembesar_dapur}", "top", '508px', { fromValue: '508px'}], position: 0, duration: 0 },
                { id: "eid19226", tween: [ "transform", "${_jarum2}", "rotateZ", '361deg', { fromValue: '120deg'}], position: 1017901, duration: 44516, easing: "easeOutBounce" },
                { id: "eid32822", tween: [ "style", "${_kacaPembesar_dapuroven}", "top", '832px', { fromValue: '832px'}], position: 0, duration: 0 },
                { id: "eid32821", tween: [ "style", "${_kacaPembesar_dapuroven}", "left", '6084px', { fromValue: '6084px'}], position: 0, duration: 0 }            ]
        }
    }
},
"semprotan": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'semprotan',
                    type: 'image',
                    rect: ['20px', '0px', '217px', '648px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/semprotan.svg', '0px', '0px']
                },
                {
                    type: 'rect',
                    id: 'Stage_time_settter',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    rect: ['3632px', '-476px', '760px', '730px', 'auto', 'auto'],
                    fill: ['rgba(192,192,192,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_semprotan}": [
                ["style", "left", '20px'],
                ["style", "top", '0px']
            ],
            "${_Stage_time_settter}": [
                ["style", "opacity", '0']
            ],
            "${symbolSelector}": [
                ["style", "height", '776px'],
                ["style", "width", '237px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1800000,
            autoPlay: true,
            timeline: [
                { id: "eid14201", tween: [ "style", "${_Stage_time_settter}", "opacity", '0', { fromValue: '0'}], position: 1800000, duration: 0 }            ]
        }
    }
},
"api": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'api2',
                    type: 'image',
                    rect: ['0px', '0px', '460px', '357px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/api.svg', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_api2}": [
                ["style", "top", '0px'],
                ["transform", "scaleX", '1'],
                ["transform", "scaleY", '1'],
                ["style", "left", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '357px'],
                ["style", "width", '460px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 5388,
            autoPlay: true,
            labels: {
                "a": 0
            },
            timeline: [
                { id: "eid16829", tween: [ "transform", "${_api2}", "scaleY", '0.9', { fromValue: '1'}], position: 0, duration: 3138 },
                { id: "eid16832", tween: [ "transform", "${_api2}", "scaleY", '1.07', { fromValue: '0.9'}], position: 3138, duration: 1095 },
                { id: "eid16835", tween: [ "transform", "${_api2}", "scaleY", '1', { fromValue: '1.07'}], position: 4233, duration: 1155 },
                { id: "eid16828", tween: [ "transform", "${_api2}", "scaleX", '1.1', { fromValue: '1'}], position: 0, duration: 898 },
                { id: "eid16830", tween: [ "transform", "${_api2}", "scaleX", '1', { fromValue: '1.1'}], position: 898, duration: 1305 },
                { id: "eid16833", tween: [ "transform", "${_api2}", "scaleX", '1.13999', { fromValue: '1'}], position: 2203, duration: 1389 },
                { id: "eid16834", tween: [ "transform", "${_api2}", "scaleX", '1', { fromValue: '1.13999'}], position: 3592, duration: 1796 }            ]
        }
    }
},
"mangkok": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'asep2',
                    type: 'image',
                    rect: ['69px', '-651px', '261px', '666px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/asep.svg', '0px', '0px']
                },
                {
                    rect: ['24px', '-26px', '304px', '51px', 'auto', 'auto'],
                    id: 'Pasted62',
                    transform: [[0, 0], ['-2']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/Pasted6.svg', '0px', '0px']
                },
                {
                    id: 'mangkok',
                    type: 'image',
                    rect: ['740px', '-33px', '362px', '138px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/mangkok.svg', '0px', '0px']
                },
                {
                    type: 'rect',
                    id: 'Stage_time_settter',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    rect: ['3632px', '-476px', '760px', '730px', 'auto', 'auto'],
                    fill: ['rgba(192,192,192,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_mangkok}": [
                ["style", "top", '0px'],
                ["style", "left", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '138px'],
                ["style", "width", '362px']
            ],
            "${_Pasted62}": [
                ["style", "top", '-26px'],
                ["transform", "scaleY", '0'],
                ["transform", "rotateZ", '-2deg'],
                ["transform", "scaleX", '1'],
                ["style", "left", '24px'],
                ["style", "-webkit-transform-origin", [50,93.29], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,93.29],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,93.29],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,93.29],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,93.29],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_asep2}": [
                ["style", "top", '-651px'],
                ["transform", "scaleY", '0.85'],
                ["transform", "scaleX", '0.7'],
                ["style", "opacity", '0'],
                ["style", "left", '69px'],
                ["style", "-webkit-transform-origin", [44.06,101.2], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [44.06,101.2],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [44.06,101.2],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [44.06,101.2],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [44.06,101.2],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_Stage_time_settter}": [
                ["style", "opacity", '0']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1800000,
            autoPlay: false,
            timeline: [
                { id: "eid17282", tween: [ "transform", "${_Pasted62}", "scaleY", '0.65', { fromValue: '0'}], position: 1035000, duration: 12296 },
                { id: "eid17285", tween: [ "transform", "${_Pasted62}", "scaleY", '1', { fromValue: '0.65'}], position: 1047296, duration: 12704 },
                { id: "eid18258", tween: [ "transform", "${_asep2}", "scaleX", '0.8', { fromValue: '0.7'}], position: 1065000, duration: 12932 },
                { id: "eid18261", tween: [ "transform", "${_asep2}", "scaleX", '1', { fromValue: '0.8'}], position: 1077932, duration: 15175 },
                { id: "eid18263", tween: [ "transform", "${_asep2}", "scaleX", '0.87', { fromValue: '1'}], position: 1093107, duration: 29370 },
                { id: "eid18259", tween: [ "transform", "${_asep2}", "scaleY", '1', { fromValue: '0.85'}], position: 1065000, duration: 28107 },
                { id: "eid18264", tween: [ "transform", "${_asep2}", "scaleY", '0.85', { fromValue: '1'}], position: 1093107, duration: 29370 },
                { id: "eid17278", tween: [ "transform", "${_Pasted62}", "scaleX", '1.08', { fromValue: '1'}], position: 1035000, duration: 12296 },
                { id: "eid17284", tween: [ "transform", "${_Pasted62}", "scaleX", '1', { fromValue: '1.08'}], position: 1047296, duration: 12704 },
                { id: "eid18257", tween: [ "style", "${_asep2}", "-webkit-transform-origin", [44.06,101.2], { valueTemplate: '@@0@@% @@1@@%', fromValue: [44.06,101.2]}], position: 1065000, duration: 0 },
                { id: "eid44174", tween: [ "style", "${_asep2}", "-moz-transform-origin", [44.06,101.2], { valueTemplate: '@@0@@% @@1@@%', fromValue: [44.06,101.2]}], position: 1065000, duration: 0 },
                { id: "eid44175", tween: [ "style", "${_asep2}", "-ms-transform-origin", [44.06,101.2], { valueTemplate: '@@0@@% @@1@@%', fromValue: [44.06,101.2]}], position: 1065000, duration: 0 },
                { id: "eid44176", tween: [ "style", "${_asep2}", "msTransformOrigin", [44.06,101.2], { valueTemplate: '@@0@@% @@1@@%', fromValue: [44.06,101.2]}], position: 1065000, duration: 0 },
                { id: "eid44177", tween: [ "style", "${_asep2}", "-o-transform-origin", [44.06,101.2], { valueTemplate: '@@0@@% @@1@@%', fromValue: [44.06,101.2]}], position: 1065000, duration: 0 },
                { id: "eid17272", tween: [ "style", "${_Stage_time_settter}", "opacity", '0', { fromValue: '0'}], position: 1800000, duration: 0 },
                { id: "eid18269", tween: [ "style", "${_asep2}", "opacity", '1', { fromValue: '0'}], position: 1065000, duration: 21554 },
                { id: "eid18268", tween: [ "style", "${_asep2}", "opacity", '0', { fromValue: '1'}], position: 1086554, duration: 35923 }            ]
        }
    }
},
"mainTRACK_2": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: true,
    content: {
            dom: [
                {
                    id: 'town_laST2',
                    type: 'image',
                    rect: ['9393px', '389px', '5848px', '818px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/town%20laST.svg', '0px', '0px']
                },
                {
                    transform: [[0, 0], [], [], ['1.76811', '1.05']],
                    id: 'BG3b',
                    type: 'image',
                    rect: ['496px', '64px', '6363px', '1104px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/BG3b.svg', '0px', '0px']
                },
                {
                    id: '_03_main_track',
                    type: 'image',
                    rect: ['0px', '0px', '10507px', '1276px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/03%20main%20track.svg', '0px', '0px']
                },
                {
                    rect: ['3632px', '-476px', '760px', '730px', 'auto', 'auto'],
                    id: 'Stage_time_settterCopy9',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,1)']
                },
                {
                    id: 'jarum2',
                    type: 'image',
                    rect: ['5607px', '152px', '23px', '50px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/jarum.svg', '0px', '0px']
                },
                {
                    transform: [[0, 0], [], [], ['0.86666', '0.86666']],
                    id: 'Cizz_shop2',
                    type: 'image',
                    rect: ['14419px', '250px', '772px', '900px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Cizz%20shop.svg', '0px', '0px']
                },
                {
                    id: 'kacaPembesar_toko',
                    type: 'rect',
                    rect: ['14136', '608', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'QUIZ_4',
                    type: 'rect',
                    rect: ['13620px', '389px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'QUIZ_4',
                symbolName: 'QUIZ_4',
                autoPlay: {

               }
            },
            {
                id: 'kacaPembesar_toko',
                symbolName: 'kacaPembesar_toko',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_Stage_time_settterCopy9}": [
                ["style", "opacity", '0']
            ],
            "${__03_main_track}": [
                ["style", "top", '0px'],
                ["style", "left", '0px']
            ],
            "${_QUIZ_4}": [
                ["style", "top", '389px'],
                ["style", "left", '13620px']
            ],
            "${_town_laST2}": [
                ["style", "top", '389px'],
                ["style", "left", '9393px']
            ],
            "${symbolSelector}": [
                ["style", "height", '1276px'],
                ["style", "overflow", 'visible'],
                ["style", "width", '10000px']
            ],
            "${_Cizz_shop2}": [
                ["style", "top", '250px'],
                ["transform", "scaleX", '0.86666'],
                ["transform", "scaleY", '0.86666'],
                ["style", "left", '14419px']
            ],
            "${_jarum2}": [
                ["style", "-webkit-transform-origin", [62.32,78.67], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [62.32,78.67],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [62.32,78.67],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [62.32,78.67],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [62.32,78.67],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '152px'],
                ["style", "left", '5607px'],
                ["transform", "rotateZ", '120deg']
            ],
            "${_BG3b}": [
                ["style", "top", '64px'],
                ["transform", "scaleY", '1.05'],
                ["transform", "scaleX", '1.76811'],
                ["style", "left", '496px'],
                ["style", "width", '6363px']
            ],
            "${_kacaPembesar_toko}": [
                ["style", "top", '351px'],
                ["style", "left", '14422px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1800000,
            autoPlay: false,
            timeline: [
                { id: "eid19226", tween: [ "transform", "${_jarum2}", "rotateZ", '361deg', { fromValue: '120deg'}], position: 1017901, duration: 44516, easing: "easeOutBounce" },
                { id: "eid10308", tween: [ "style", "${_Stage_time_settterCopy9}", "opacity", '0', { fromValue: '0'}], position: 1800000, duration: 0 },
                { id: "eid32825", tween: [ "style", "${_kacaPembesar_toko}", "top", '351px', { fromValue: '351px'}], position: 0, duration: 0 },
                { id: "eid32826", tween: [ "style", "${_kacaPembesar_toko}", "left", '14422px', { fromValue: '14422px'}], position: 0, duration: 0 }            ]
        }
    }
},
"delivery_truck": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'truck_body2',
                    type: 'image',
                    rect: ['0px', '0px', '1521px', '833px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/truck_body.svg', '0px', '0px']
                },
                {
                    id: 'truck_wheel_22',
                    type: 'image',
                    rect: ['356px', '755px', '172px', '172px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/truck%20wheel%202.svg', '0px', '0px']
                },
                {
                    id: 'truck_wheel2',
                    type: 'image',
                    rect: ['1164px', '755px', '172px', '172px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/truck_wheel.svg', '0px', '0px']
                },
                {
                    type: 'rect',
                    id: 'Stage_time_settter',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    rect: ['3632px', '-476px', '760px', '730px', 'auto', 'auto'],
                    fill: ['rgba(192,192,192,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '927px'],
                ["style", "width", '1521px']
            ],
            "${_truck_body2}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_truck_wheel_22}": [
                ["style", "top", '755px'],
                ["style", "left", '356px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_truck_wheel2}": [
                ["style", "top", '755px'],
                ["style", "left", '1164px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_Stage_time_settter}": [
                ["style", "opacity", '0']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1800000,
            autoPlay: false,
            timeline: [
                { id: "eid23870", tween: [ "style", "${_Stage_time_settter}", "opacity", '0', { fromValue: '0'}], position: 1800000, duration: 0 },
                { id: "eid23761", tween: [ "transform", "${_truck_wheel_22}", "rotateZ", '1000deg', { fromValue: '0deg'}], position: 1320000, duration: 90000 },
                { id: "eid23760", tween: [ "transform", "${_truck_wheel2}", "rotateZ", '1000deg', { fromValue: '0deg'}], position: 1320000, duration: 90000 }            ]
        }
    }
},
"mainTRACK_3": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: true,
    content: {
            dom: [
                {
                    id: 'town_laST2',
                    type: 'image',
                    rect: ['9393px', '389px', '5848px', '818px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/town%20laST.svg', '0px', '0px']
                },
                {
                    rect: ['557px', '64px', '6521px', '1104px', 'auto', 'auto'],
                    id: 'BG3b',
                    transform: [[0, 0], [], [], ['1.68393']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/BG3b.svg', '0px', '0px']
                },
                {
                    id: '_03_main_track',
                    type: 'image',
                    rect: ['0px', '0px', '10507px', '1276px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/03%20main%20track.svg', '0px', '0px']
                },
                {
                    type: 'rect',
                    id: 'Stage_time_settterCopy9',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    rect: ['3632px', '-476px', '760px', '730px', 'auto', 'auto'],
                    fill: ['rgba(192,192,192,1)']
                },
                {
                    id: 'jarum2',
                    type: 'image',
                    rect: ['5607px', '152px', '23px', '50px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/jarum.svg', '0px', '0px']
                },
                {
                    rect: ['14381px', '250px', '772px', '900px', 'auto', 'auto'],
                    id: 'Cizz_shop2',
                    transform: [[0, 0], [], [], ['0.86666', '0.86666']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/Cizz%20shop.svg', '0px', '0px']
                },
                {
                    id: 'delivery_truck',
                    type: 'rect',
                    rect: ['10300px', '196px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'delivery_truck',
                symbolName: 'delivery_truck',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_Stage_time_settterCopy9}": [
                ["style", "opacity", '0']
            ],
            "${_town_laST2}": [
                ["style", "top", '389px'],
                ["style", "left", '9393px']
            ],
            "${_Cizz_shop2}": [
                ["transform", "scaleX", '0.86666'],
                ["style", "left", '14381px'],
                ["transform", "scaleY", '0.86666'],
                ["style", "top", '250px']
            ],
            "${_BG3b}": [
                ["transform", "scaleX", '1.68393'],
                ["style", "left", '557px'],
                ["style", "top", '64px']
            ],
            "${__03_main_track}": [
                ["style", "top", '0px'],
                ["style", "left", '0px']
            ],
            "${_jarum2}": [
                ["style", "top", '152px'],
                ["style", "-webkit-transform-origin", [62.32,78.67], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [62.32,78.67],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [62.32,78.67],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [62.32,78.67],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [62.32,78.67],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '5607px'],
                ["transform", "rotateZ", '120deg']
            ],
            "${_delivery_truck}": [
                ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "left", '10300px'],
                ["style", "top", '196px']
            ],
            "${symbolSelector}": [
                ["style", "height", '1276px'],
                ["style", "width", '10000px'],
                ["style", "overflow", 'visible']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1800000,
            autoPlay: false,
            timeline: [
                { id: "eid10308", tween: [ "style", "${_Stage_time_settterCopy9}", "opacity", '0', { fromValue: '0'}], position: 1800000, duration: 0 },
                { id: "eid20883", tween: [ "style", "${_delivery_truck}", "top", '192px', { fromValue: '196px'}], position: 1320000, duration: 120000 },
                { id: "eid20881", tween: [ "transform", "${_delivery_truck}", "scaleX", '0.47113', { fromValue: '1'}], position: 1320000, duration: 60000 },
                { id: "eid19226", tween: [ "transform", "${_jarum2}", "rotateZ", '361deg', { fromValue: '120deg'}], position: 1017901, duration: 44516, easing: "easeOutBounce" },
                { id: "eid20880", tween: [ "style", "${_delivery_truck}", "-webkit-transform-origin", [51.35,91.05], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 1320000, duration: 0 },
                { id: "eid44178", tween: [ "style", "${_delivery_truck}", "-moz-transform-origin", [51.35,91.05], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 1320000, duration: 0 },
                { id: "eid44179", tween: [ "style", "${_delivery_truck}", "-ms-transform-origin", [51.35,91.05], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 1320000, duration: 0 },
                { id: "eid44180", tween: [ "style", "${_delivery_truck}", "msTransformOrigin", [51.35,91.05], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 1320000, duration: 0 },
                { id: "eid44181", tween: [ "style", "${_delivery_truck}", "-o-transform-origin", [51.35,91.05], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 1320000, duration: 0 },
                { id: "eid20877", tween: [ "style", "${_delivery_truck}", "left", '13302px', { fromValue: '10300px'}], position: 1320000, duration: 120000, easing: "easeOutQuad" },
                { id: "eid20882", tween: [ "transform", "${_delivery_truck}", "scaleY", '0.47113', { fromValue: '1'}], position: 1320000, duration: 60000 }            ]
        }
    }
},
"bgoutroo": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    id: 'bg_OUTRO2',
                    rect: ['-12710px', '87px', '2869px', '1088px', 'auto', 'auto'],
                    transform: [[0, 0], [], [], ['1', '1.15999']],
                    fill: ['rgba(0,0,0,0)', 'images/bg%20OUTRO.svg', '0px', '0px']
                },
                {
                    id: 'Pasted7',
                    type: 'image',
                    rect: ['-2893px', '-1912px', '2862px', '1364px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Pasted7.svg', '0px', '0px']
                },
                {
                    rect: ['3632px', '-476px', '760px', '730px', 'auto', 'auto'],
                    id: 'Stage_time_settter',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_bg_OUTRO2}": [
                ["style", "top", '87px'],
                ["transform", "scaleY", '1.15999'],
                ["style", "left", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '1262px'],
                ["style", "width", '2869px']
            ],
            "${_Stage_time_settter}": [
                ["style", "opacity", '0']
            ],
            "${_Pasted7}": [
                ["style", "left", '47px'],
                ["style", "top", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1800000,
            autoPlay: true,
            timeline: [
                { id: "eid27572", tween: [ "style", "${_Pasted7}", "left", '-12653px', { fromValue: '47px'}], position: 750000, duration: 660000 },
                { id: "eid27573", tween: [ "style", "${_Pasted7}", "left", '-15343px', { fromValue: '-12653px'}], position: 1422135, duration: 77865, easing: "easeInOutQuart" },
                { id: "eid26584", tween: [ "style", "${_bg_OUTRO2}", "left", '-12720px', { fromValue: '0px'}], position: 750000, duration: 660000 },
                { id: "eid26621", tween: [ "style", "${_bg_OUTRO2}", "left", '-12720px', { fromValue: '-12720px'}], position: 1410000, duration: 0 },
                { id: "eid26804", tween: [ "style", "${_bg_OUTRO2}", "left", '-15410px', { fromValue: '-12720px'}], position: 1422135, duration: 77865, easing: "easeInOutQuart" },
                { id: "eid27682", tween: [ "style", "${_Stage_time_settter}", "opacity", '0', { fromValue: '0'}], position: 1800000, duration: 0 },
                { id: "eid27571", tween: [ "style", "${_Pasted7}", "top", '0px', { fromValue: '0px'}], position: 750000, duration: 0 }            ]
        }
    }
},
"charOutro": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'char_samping_body2',
                    type: 'image',
                    rect: ['196px', '0px', '335px', '1024px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/char%20samping%20body.svg', '0px', '0px']
                },
                {
                    type: 'rect',
                    id: 'Stage_time_settterCopy2',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    rect: ['3632px', '-476px', '760px', '730px', 'auto', 'auto'],
                    fill: ['rgba(192,192,192,1)']
                },
                {
                    type: 'rect',
                    id: 'Stage_time_settterCopy',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    rect: ['3632px', '-476px', '760px', '730px', 'auto', 'auto'],
                    fill: ['rgba(192,192,192,1)']
                },
                {
                    id: 'char_samping_hand2',
                    type: 'image',
                    rect: ['0px', '381px', '371px', '142px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/char%20samping%20hand.svg', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '1024px'],
                ["style", "width", '531px']
            ],
            "${_char_samping_hand2}": [
                ["style", "-webkit-transform-origin", [90.57,27.46], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [90.57,27.46],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [90.57,27.46],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [90.57,27.46],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [90.57,27.46],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '381px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '-66deg']
            ],
            "${_char_samping_body2}": [
                ["style", "left", '196px'],
                ["style", "top", '0px']
            ],
            "${_Stage_time_settterCopy}": [
                ["style", "opacity", '0']
            ],
            "${_Stage_time_settterCopy2}": [
                ["style", "opacity", '0']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1800000,
            autoPlay: false,
            timeline: [
                { id: "eid28669", tween: [ "transform", "${_char_samping_hand2}", "rotateZ", '-22deg', { fromValue: '-66deg'}], position: 1422135, duration: 77865, easing: "easeInOutQuart" },
                { id: "eid30742", tween: [ "style", "${_Stage_time_settterCopy2}", "opacity", '0', { fromValue: '0'}], position: 1800000, duration: 0 },
                { id: "eid28665", tween: [ "style", "${_Stage_time_settterCopy}", "opacity", '0', { fromValue: '0'}], position: 1800000, duration: 0 }            ]
        }
    }
},
"awan01": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    id: 'awan1',
                    rect: ['-183px', '198px', '884px', '309px', 'auto', 'auto'],
                    transform: [[0, 0], [], [], ['0.58575', '0.58576']],
                    fill: ['rgba(0,0,0,0)', 'images/awan1.svg', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'awan1Copy',
                    rect: ['1925px', '26px', '884px', '309px', 'auto', 'auto'],
                    transform: [[0, 0], [], [], ['-0.60882', '0.63753']],
                    fill: ['rgba(0,0,0,0)', 'images/awan1.svg', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'awan2',
                    rect: ['908px', '-68px', '742px', '300px', 'auto', 'auto'],
                    transform: [[0, 0], [], [], ['0.54574', '0.54575']],
                    fill: ['rgba(0,0,0,0)', 'images/awan2.svg', '0px', '0px']
                },
                {
                    id: 'QUIZ_2',
                    type: 'rect',
                    rect: ['1488px', '59px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'QUIZ_2',
                symbolName: 'QUIZ_2',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_awan2}": [
                ["style", "top", '-68px'],
                ["transform", "scaleY", '0.54575'],
                ["style", "left", '908px'],
                ["transform", "scaleX", '0.54574']
            ],
            "${symbolSelector}": [
                ["style", "height", '443px'],
                ["style", "width", '1481px']
            ],
            "${_awan1}": [
                ["style", "top", '198px'],
                ["transform", "scaleY", '0.58576'],
                ["style", "left", '-183px'],
                ["transform", "scaleX", '0.58575']
            ],
            "${_awan1Copy}": [
                ["style", "top", '26px'],
                ["transform", "scaleX", '-0.60882'],
                ["transform", "scaleY", '0.63753'],
                ["style", "left", '1925px']
            ],
            "${_QUIZ_2}": [
                ["style", "top", '59px'],
                ["style", "left", '1488px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"iconQuiz": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'icon_bg',
                    type: 'image',
                    rect: ['0px', '0px', '225px', '225px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/icon%20bg.svg', '0px', '0px']
                },
                {
                    id: 'tanda_tanya22',
                    type: 'image',
                    rect: ['70px', '59px', '76px', '116px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/tanda%20tanya2.svg', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '225px'],
                ["style", "width", '225px']
            ],
            "${_tanda_tanya22}": [
                ["style", "height", '116px'],
                ["style", "top", '59px'],
                ["style", "left", '70px'],
                ["style", "width", '76px']
            ],
            "${_icon_bg}": [
                ["style", "top", '0px'],
                ["style", "left", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2861,
            autoPlay: true,
            labels: {
                "a": 0
            },
            timeline: [
                { id: "eid30962", tween: [ "style", "${_tanda_tanya22}", "top", '45px', { fromValue: '59px'}], position: 0, duration: 826 },
                { id: "eid30965", tween: [ "style", "${_tanda_tanya22}", "top", '55px', { fromValue: '45px'}], position: 826, duration: 477 },
                { id: "eid30971", tween: [ "style", "${_tanda_tanya22}", "top", '61px', { fromValue: '55px'}], position: 1303, duration: 713 },
                { id: "eid30970", tween: [ "style", "${_tanda_tanya22}", "top", '59px', { fromValue: '61px'}], position: 2358, duration: 503 },
                { id: "eid30961", tween: [ "style", "${_tanda_tanya22}", "left", '75px', { fromValue: '70px'}], position: 0, duration: 826 },
                { id: "eid30963", tween: [ "style", "${_tanda_tanya22}", "left", '62px', { fromValue: '75px'}], position: 826, duration: 477 },
                { id: "eid30966", tween: [ "style", "${_tanda_tanya22}", "left", '75px', { fromValue: '62px'}], position: 1303, duration: 713 },
                { id: "eid30968", tween: [ "style", "${_tanda_tanya22}", "left", '62px', { fromValue: '75px'}], position: 2016, duration: 343 },
                { id: "eid30969", tween: [ "style", "${_tanda_tanya22}", "left", '70px', { fromValue: '62px'}], position: 2358, duration: 503 }            ]
        }
    }
},
"kacaPembesar": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    id: 'kaca_pembesar',
                    rect: ['0px', '0px', '78px', '105px', 'auto', 'auto'],
                    cursor: ['pointer'],
                    fill: ['rgba(0,0,0,0)', 'images/kaca%20pembesar.svg', '0px', '0px']
                },
                {
                    id: 'teks1',
                    type: 'rect',
                    rect: ['53', '-267', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'teks1',
                symbolName: 'teks1',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_teks1}": [
                ["style", "opacity", '0']
            ],
            "${_kaca_pembesar}": [
                ["style", "top", '0px'],
                ["subproperty", "filter.saturate", '1'],
                ["subproperty", "filter.contrast", '1'],
                ["transform", "rotateZ", '0deg'],
                ["style", "height", '105px'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '0px'],
                ["style", "width", '78px']
            ],
            "${symbolSelector}": [
                ["style", "height", '105px'],
                ["style", "width", '78px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 6311,
            autoPlay: true,
            labels: {
                "a": 0,
                "b": 1000,
                "c": 5676
            },
            timeline: [
                { id: "eid31328", tween: [ "transform", "${_kaca_pembesar}", "rotateZ", '17deg', { fromValue: '0deg'}], position: 1000, duration: 469 },
                { id: "eid31329", tween: [ "transform", "${_kaca_pembesar}", "rotateZ", '-19deg', { fromValue: '17deg'}], position: 1469, duration: 1072 },
                { id: "eid31330", tween: [ "transform", "${_kaca_pembesar}", "rotateZ", '27deg', { fromValue: '-19deg'}], position: 2541, duration: 1288 },
                { id: "eid31331", tween: [ "transform", "${_kaca_pembesar}", "rotateZ", '-14deg', { fromValue: '27deg'}], position: 3829, duration: 719 },
                { id: "eid31333", tween: [ "transform", "${_kaca_pembesar}", "rotateZ", '0deg', { fromValue: '-14deg'}], position: 4548, duration: 923 },
                { id: "eid31108", tween: [ "subproperty", "${_kaca_pembesar}", "filter.contrast", '1', { fromValue: '1'}], position: 0, duration: 0 },
                { id: "eid31107", tween: [ "subproperty", "${_kaca_pembesar}", "filter.contrast", '2', { fromValue: '1'}], position: 1000, duration: 0 },
                { id: "eid31659", tween: [ "subproperty", "${_kaca_pembesar}", "filter.saturate", '1', { fromValue: '1'}], position: 1000, duration: 0 },
                { id: "eid31660", tween: [ "subproperty", "${_kaca_pembesar}", "filter.saturate", '10', { fromValue: '1'}], position: 5676, duration: 0 },
                { id: "eid31708", tween: [ "style", "${_teks1}", "opacity", '1', { fromValue: '0'}], position: 5676, duration: 635 }            ]
        }
    }
},
"teks1": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '-48px', '749px', '333px', 'auto', 'auto'],
                    id: 'Teks_Box',
                    transform: [[0, 0], [], [], ['1', '0.71']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/Teks%20Box.svg', '0px', '0px']
                },
                {
                    rect: ['67px', '98px', '600px', '178px', 'auto', 'auto'],
                    font: ['Trebuchet MS, Arial, Helvetica, sans-serif', 22, 'rgba(247,166,27,1)', '400', 'none', 'normal'],
                    id: 'Text5',
                    text: 'Our cheese-based ingredients are made from milk produced by premium quality New Zealand cows that are fed by 100% natural and mineral-rich grass.',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['67px', '43px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['Arial Black, Gadget, sans-serif', 24, 'rgba(247,166,27,1.00)', '400', 'none', 'normal'],
                    id: 'Text3',
                    text: '100% Natural, Healthy, Premium Milk',
                    align: 'left',
                    type: 'text'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Teks_Box}": [
                ["style", "top", '-48px'],
                ["transform", "scaleY", '0.71'],
                ["style", "height", '333px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "width", '749px']
            ],
            "${_Text3}": [
                ["style", "top", '43px'],
                ["style", "letter-spacing", '2px'],
                ["style", "opacity", '1'],
                ["color", "color", 'rgba(247,166,27,1.00)'],
                ["style", "font-family", 'Arial Black, Gadget, sans-serif'],
                ["style", "left", '67px'],
                ["style", "font-size", '24px']
            ],
            "${_Text5}": [
                ["style", "top", '98px'],
                ["style", "opacity", '1'],
                ["style", "font-family", 'Trebuchet MS, Arial, Helvetica, sans-serif'],
                ["style", "left", '67px'],
                ["style", "font-size", '22px']
            ],
            "${symbolSelector}": [
                ["style", "height", '281px'],
                ["style", "width", '749px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2537,
            autoPlay: true,
            labels: {
                "a": 0,
                "b": 820,
                "c": 1856
            },
            timeline: [
                { id: "eid31667", tween: [ "style", "${_Teks_Box}", "opacity", '0', { fromValue: '1'}], position: 2000, duration: 537 },
                { id: "eid31669", tween: [ "style", "${_Text3}", "opacity", '0', { fromValue: '1'}], position: 2000, duration: 537 },
                { id: "eid31668", tween: [ "style", "${_Text5}", "opacity", '0', { fromValue: '1'}], position: 2000, duration: 537 }            ]
        }
    }
},
"kacaPembesar_1": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '78px', '105px', 'auto', 'auto'],
                    id: 'kaca_pembesar',
                    type: 'image',
                    cursor: ['pointer'],
                    fill: ['rgba(0,0,0,0)', 'images/kaca%20pembesar.svg', '0px', '0px']
                },
                {
                    id: 'teks2',
                    type: 'rect',
                    rect: ['98px', '-176px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'teks2',
                symbolName: 'teks2',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_teks2}": [
                ["style", "top", '-176px'],
                ["style", "opacity", '0'],
                ["style", "left", '98px']
            ],
            "${_kaca_pembesar}": [
                ["style", "top", '0px'],
                ["style", "width", '78px'],
                ["subproperty", "filter.contrast", '1'],
                ["transform", "rotateZ", '0deg'],
                ["style", "height", '105px'],
                ["style", "left", '0px'],
                ["style", "cursor", 'pointer'],
                ["subproperty", "filter.saturate", '1']
            ],
            "${symbolSelector}": [
                ["style", "height", '105px'],
                ["style", "width", '78px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 6311,
            autoPlay: true,
            labels: {
                "a": 0,
                "b": 1000,
                "c": 5676
            },
            timeline: [
                { id: "eid31328", tween: [ "transform", "${_kaca_pembesar}", "rotateZ", '17deg', { fromValue: '0deg'}], position: 1000, duration: 469 },
                { id: "eid31329", tween: [ "transform", "${_kaca_pembesar}", "rotateZ", '-19deg', { fromValue: '17deg'}], position: 1469, duration: 1072 },
                { id: "eid31330", tween: [ "transform", "${_kaca_pembesar}", "rotateZ", '27deg', { fromValue: '-19deg'}], position: 2541, duration: 1288 },
                { id: "eid31331", tween: [ "transform", "${_kaca_pembesar}", "rotateZ", '-14deg', { fromValue: '27deg'}], position: 3829, duration: 719 },
                { id: "eid31333", tween: [ "transform", "${_kaca_pembesar}", "rotateZ", '0deg', { fromValue: '-14deg'}], position: 4548, duration: 923 },
                { id: "eid31108", tween: [ "subproperty", "${_kaca_pembesar}", "filter.contrast", '1', { fromValue: '1'}], position: 0, duration: 0 },
                { id: "eid31107", tween: [ "subproperty", "${_kaca_pembesar}", "filter.contrast", '2', { fromValue: '1'}], position: 1000, duration: 0 },
                { id: "eid31659", tween: [ "subproperty", "${_kaca_pembesar}", "filter.saturate", '1', { fromValue: '1'}], position: 1000, duration: 0 },
                { id: "eid31660", tween: [ "subproperty", "${_kaca_pembesar}", "filter.saturate", '10', { fromValue: '1'}], position: 5676, duration: 0 },
                { id: "eid33161", tween: [ "style", "${_teks2}", "opacity", '1', { fromValue: '0'}], position: 5676, duration: 635 }            ]
        }
    }
},
"kacaPembesar_pesawat": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '78px', '105px', 'auto', 'auto'],
                    id: 'kaca_pembesar',
                    type: 'image',
                    cursor: ['pointer'],
                    fill: ['rgba(0,0,0,0)', 'images/kaca%20pembesar.svg', '0px', '0px']
                },
                {
                    id: 'teks3',
                    type: 'rect',
                    rect: ['92px', '-176px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'teks3',
                symbolName: 'teks3',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '105px'],
                ["style", "width", '78px']
            ],
            "${_teks3}": [
                ["style", "top", '-176px'],
                ["style", "opacity", '0'],
                ["style", "left", '92px']
            ],
            "${_kaca_pembesar}": [
                ["style", "top", '0px'],
                ["subproperty", "filter.saturate", '1'],
                ["subproperty", "filter.contrast", '1'],
                ["transform", "rotateZ", '0deg'],
                ["style", "height", '105px'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '0px'],
                ["style", "width", '78px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 6311,
            autoPlay: true,
            labels: {
                "a": 0,
                "b": 1000,
                "c": 5676
            },
            timeline: [
                { id: "eid31328", tween: [ "transform", "${_kaca_pembesar}", "rotateZ", '17deg', { fromValue: '0deg'}], position: 1000, duration: 469 },
                { id: "eid31329", tween: [ "transform", "${_kaca_pembesar}", "rotateZ", '-19deg', { fromValue: '17deg'}], position: 1469, duration: 1072 },
                { id: "eid31330", tween: [ "transform", "${_kaca_pembesar}", "rotateZ", '27deg', { fromValue: '-19deg'}], position: 2541, duration: 1288 },
                { id: "eid31331", tween: [ "transform", "${_kaca_pembesar}", "rotateZ", '-14deg', { fromValue: '27deg'}], position: 3829, duration: 719 },
                { id: "eid31333", tween: [ "transform", "${_kaca_pembesar}", "rotateZ", '0deg', { fromValue: '-14deg'}], position: 4548, duration: 923 },
                { id: "eid33414", tween: [ "style", "${_teks3}", "opacity", '1', { fromValue: '0'}], position: 5676, duration: 635 },
                { id: "eid31659", tween: [ "subproperty", "${_kaca_pembesar}", "filter.saturate", '1', { fromValue: '1'}], position: 1000, duration: 0 },
                { id: "eid31660", tween: [ "subproperty", "${_kaca_pembesar}", "filter.saturate", '10', { fromValue: '1'}], position: 5676, duration: 0 },
                { id: "eid31108", tween: [ "subproperty", "${_kaca_pembesar}", "filter.contrast", '1', { fromValue: '1'}], position: 0, duration: 0 },
                { id: "eid31107", tween: [ "subproperty", "${_kaca_pembesar}", "filter.contrast", '2', { fromValue: '1'}], position: 1000, duration: 0 }            ]
        }
    }
},
"kacaPembesar_dapur": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '78px', '105px', 'auto', 'auto'],
                    id: 'kaca_pembesar',
                    type: 'image',
                    cursor: ['pointer'],
                    fill: ['rgba(0,0,0,0)', 'images/kaca%20pembesar.svg', '0px', '0px']
                },
                {
                    id: 'teks4',
                    type: 'rect',
                    rect: ['108px', '-176px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'teks4',
                symbolName: 'teks4',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_teks4}": [
                ["style", "top", '-176px'],
                ["style", "opacity", '0'],
                ["style", "left", '108px']
            ],
            "${_kaca_pembesar}": [
                ["style", "top", '0px'],
                ["style", "width", '78px'],
                ["subproperty", "filter.contrast", '1'],
                ["transform", "rotateZ", '0deg'],
                ["style", "height", '105px'],
                ["style", "left", '0px'],
                ["style", "cursor", 'pointer'],
                ["subproperty", "filter.saturate", '1']
            ],
            "${symbolSelector}": [
                ["style", "height", '105px'],
                ["style", "width", '78px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 6311,
            autoPlay: true,
            labels: {
                "a": 0,
                "b": 1000,
                "c": 5676
            },
            timeline: [
                { id: "eid31328", tween: [ "transform", "${_kaca_pembesar}", "rotateZ", '17deg', { fromValue: '0deg'}], position: 1000, duration: 469 },
                { id: "eid31329", tween: [ "transform", "${_kaca_pembesar}", "rotateZ", '-19deg', { fromValue: '17deg'}], position: 1469, duration: 1072 },
                { id: "eid31330", tween: [ "transform", "${_kaca_pembesar}", "rotateZ", '27deg', { fromValue: '-19deg'}], position: 2541, duration: 1288 },
                { id: "eid31331", tween: [ "transform", "${_kaca_pembesar}", "rotateZ", '-14deg', { fromValue: '27deg'}], position: 3829, duration: 719 },
                { id: "eid31333", tween: [ "transform", "${_kaca_pembesar}", "rotateZ", '0deg', { fromValue: '-14deg'}], position: 4548, duration: 923 },
                { id: "eid31108", tween: [ "subproperty", "${_kaca_pembesar}", "filter.contrast", '1', { fromValue: '1'}], position: 0, duration: 0 },
                { id: "eid31107", tween: [ "subproperty", "${_kaca_pembesar}", "filter.contrast", '2', { fromValue: '1'}], position: 1000, duration: 0 },
                { id: "eid31659", tween: [ "subproperty", "${_kaca_pembesar}", "filter.saturate", '1', { fromValue: '1'}], position: 1000, duration: 0 },
                { id: "eid31660", tween: [ "subproperty", "${_kaca_pembesar}", "filter.saturate", '10', { fromValue: '1'}], position: 5676, duration: 0 },
                { id: "eid33739", tween: [ "style", "${_teks4}", "opacity", '1', { fromValue: '0'}], position: 5676, duration: 635 }            ]
        }
    }
},
"kacaPembesar_dapuroven": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    id: 'kaca_pembesar',
                    rect: ['0px', '-396px', '78px', '105px', 'auto', 'auto'],
                    cursor: ['pointer'],
                    fill: ['rgba(0,0,0,0)', 'images/kaca%20pembesar.svg', '0px', '0px']
                },
                {
                    id: 'teks5',
                    type: 'rect',
                    rect: ['116px', '-496px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'teks5',
                symbolName: 'teks5',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '105px'],
                ["style", "width", '78px']
            ],
            "${_teks5}": [
                ["style", "top", '-496px'],
                ["style", "opacity", '0'],
                ["style", "left", '116px']
            ],
            "${_kaca_pembesar}": [
                ["style", "top", '-396px'],
                ["subproperty", "filter.saturate", '1'],
                ["subproperty", "filter.contrast", '1'],
                ["transform", "rotateZ", '0deg'],
                ["style", "height", '105px'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '0px'],
                ["style", "width", '78px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 6311,
            autoPlay: true,
            labels: {
                "a": 0,
                "b": 1000,
                "c": 5676
            },
            timeline: [
                { id: "eid31328", tween: [ "transform", "${_kaca_pembesar}", "rotateZ", '17deg', { fromValue: '0deg'}], position: 1000, duration: 469 },
                { id: "eid31329", tween: [ "transform", "${_kaca_pembesar}", "rotateZ", '-19deg', { fromValue: '17deg'}], position: 1469, duration: 1072 },
                { id: "eid31330", tween: [ "transform", "${_kaca_pembesar}", "rotateZ", '27deg', { fromValue: '-19deg'}], position: 2541, duration: 1288 },
                { id: "eid31331", tween: [ "transform", "${_kaca_pembesar}", "rotateZ", '-14deg', { fromValue: '27deg'}], position: 3829, duration: 719 },
                { id: "eid31333", tween: [ "transform", "${_kaca_pembesar}", "rotateZ", '0deg', { fromValue: '-14deg'}], position: 4548, duration: 923 },
                { id: "eid31108", tween: [ "subproperty", "${_kaca_pembesar}", "filter.contrast", '1', { fromValue: '1'}], position: 0, duration: 0 },
                { id: "eid31107", tween: [ "subproperty", "${_kaca_pembesar}", "filter.contrast", '2', { fromValue: '1'}], position: 1000, duration: 0 },
                { id: "eid31659", tween: [ "subproperty", "${_kaca_pembesar}", "filter.saturate", '1', { fromValue: '1'}], position: 1000, duration: 0 },
                { id: "eid31660", tween: [ "subproperty", "${_kaca_pembesar}", "filter.saturate", '10', { fromValue: '1'}], position: 5676, duration: 0 },
                { id: "eid33776", tween: [ "style", "${_teks5}", "opacity", '1', { fromValue: '0'}], position: 5676, duration: 635 }            ]
        }
    }
},
"kacaPembesar_dapur_packing": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    id: 'kaca_pembesar',
                    rect: ['0px', '0px', '78px', '105px', 'auto', 'auto'],
                    cursor: ['pointer'],
                    fill: ['rgba(0,0,0,0)', 'images/kaca%20pembesar.svg', '0px', '0px']
                },
                {
                    id: 'teks6',
                    type: 'rect',
                    rect: ['-820px', '-160px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'teks6',
                symbolName: 'teks6',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_teks6}": [
                ["style", "top", '-160px'],
                ["style", "opacity", '0'],
                ["style", "left", '-820px']
            ],
            "${_kaca_pembesar}": [
                ["style", "top", '0px'],
                ["style", "width", '78px'],
                ["subproperty", "filter.contrast", '1'],
                ["transform", "rotateZ", '0deg'],
                ["style", "height", '105px'],
                ["style", "left", '0px'],
                ["style", "cursor", 'pointer'],
                ["subproperty", "filter.saturate", '1']
            ],
            "${symbolSelector}": [
                ["style", "height", '105px'],
                ["style", "width", '78px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 6311,
            autoPlay: true,
            labels: {
                "a": 0,
                "b": 1000,
                "c": 5676
            },
            timeline: [
                { id: "eid31328", tween: [ "transform", "${_kaca_pembesar}", "rotateZ", '17deg', { fromValue: '0deg'}], position: 1000, duration: 469 },
                { id: "eid31329", tween: [ "transform", "${_kaca_pembesar}", "rotateZ", '-19deg', { fromValue: '17deg'}], position: 1469, duration: 1072 },
                { id: "eid31330", tween: [ "transform", "${_kaca_pembesar}", "rotateZ", '27deg', { fromValue: '-19deg'}], position: 2541, duration: 1288 },
                { id: "eid31331", tween: [ "transform", "${_kaca_pembesar}", "rotateZ", '-14deg', { fromValue: '27deg'}], position: 3829, duration: 719 },
                { id: "eid31333", tween: [ "transform", "${_kaca_pembesar}", "rotateZ", '0deg', { fromValue: '-14deg'}], position: 4548, duration: 923 },
                { id: "eid31108", tween: [ "subproperty", "${_kaca_pembesar}", "filter.contrast", '1', { fromValue: '1'}], position: 0, duration: 0 },
                { id: "eid31107", tween: [ "subproperty", "${_kaca_pembesar}", "filter.contrast", '2', { fromValue: '1'}], position: 1000, duration: 0 },
                { id: "eid31659", tween: [ "subproperty", "${_kaca_pembesar}", "filter.saturate", '1', { fromValue: '1'}], position: 1000, duration: 0 },
                { id: "eid31660", tween: [ "subproperty", "${_kaca_pembesar}", "filter.saturate", '10', { fromValue: '1'}], position: 5676, duration: 0 },
                { id: "eid33993", tween: [ "style", "${_teks6}", "opacity", '1', { fromValue: '0'}], position: 5676, duration: 635 }            ]
        }
    }
},
"kacaPembesar_toko": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    id: 'kaca_pembesar',
                    rect: ['0px', '0px', '78px', '105px', 'auto', 'auto'],
                    cursor: ['pointer'],
                    fill: ['rgba(0,0,0,0)', 'images/kaca%20pembesar.svg', '0px', '0px']
                },
                {
                    id: 'teks7',
                    type: 'rect',
                    rect: ['-791px', '-176px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'teks7',
                symbolName: 'teks7',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_teks7}": [
                ["style", "top", '-176px'],
                ["style", "opacity", '0'],
                ["style", "left", '-791px']
            ],
            "${symbolSelector}": [
                ["style", "height", '105px'],
                ["style", "width", '78px']
            ],
            "${_kaca_pembesar}": [
                ["style", "top", '0px'],
                ["subproperty", "filter.saturate", '1'],
                ["subproperty", "filter.contrast", '1'],
                ["transform", "rotateZ", '0deg'],
                ["style", "height", '105px'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '0px'],
                ["style", "width", '78px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 6311,
            autoPlay: true,
            labels: {
                "a": 0,
                "b": 1000,
                "c": 5676
            },
            timeline: [
                { id: "eid31328", tween: [ "transform", "${_kaca_pembesar}", "rotateZ", '17deg', { fromValue: '0deg'}], position: 1000, duration: 469 },
                { id: "eid31329", tween: [ "transform", "${_kaca_pembesar}", "rotateZ", '-19deg', { fromValue: '17deg'}], position: 1469, duration: 1072 },
                { id: "eid31330", tween: [ "transform", "${_kaca_pembesar}", "rotateZ", '27deg', { fromValue: '-19deg'}], position: 2541, duration: 1288 },
                { id: "eid31331", tween: [ "transform", "${_kaca_pembesar}", "rotateZ", '-14deg', { fromValue: '27deg'}], position: 3829, duration: 719 },
                { id: "eid31333", tween: [ "transform", "${_kaca_pembesar}", "rotateZ", '0deg', { fromValue: '-14deg'}], position: 4548, duration: 923 },
                { id: "eid31108", tween: [ "subproperty", "${_kaca_pembesar}", "filter.contrast", '1', { fromValue: '1'}], position: 0, duration: 0 },
                { id: "eid31107", tween: [ "subproperty", "${_kaca_pembesar}", "filter.contrast", '2', { fromValue: '1'}], position: 1000, duration: 0 },
                { id: "eid31659", tween: [ "subproperty", "${_kaca_pembesar}", "filter.saturate", '1', { fromValue: '1'}], position: 1000, duration: 0 },
                { id: "eid31660", tween: [ "subproperty", "${_kaca_pembesar}", "filter.saturate", '10', { fromValue: '1'}], position: 5676, duration: 0 },
                { id: "eid33995", tween: [ "style", "${_teks7}", "opacity", '1', { fromValue: '0'}], position: 5676, duration: 635 }            ]
        }
    }
},
"teks2": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    id: 'Teks_Box',
                    rect: ['0px', '-32px', '749px', '333px', 'auto', 'auto'],
                    transform: [[0, 0], [], [], ['1', '0.78']],
                    fill: ['rgba(0,0,0,0)', 'images/Teks%20Box.svg', '0px', '0px']
                },
                {
                    type: 'text',
                    rect: ['67px', '98px', '600px', '178px', 'auto', 'auto'],
                    id: 'Text5',
                    text: 'The milk is then processed by our trusted partner in New Zealand and made into cheese and cream, and then safely sealed in a package. The process is done in a very sanitized and clean environment and is very high-quality controlled. ',
                    align: 'left',
                    font: ['Trebuchet MS, Arial, Helvetica, sans-serif', 22, 'rgba(247,166,27,1)', '400', 'none', 'normal']
                },
                {
                    type: 'text',
                    rect: ['67px', '43px', 'auto', 'auto', 'auto', 'auto'],
                    id: 'Text3',
                    text: 'High Quality Cheese and Cream',
                    align: 'left',
                    font: ['Tahoma, Geneva, sans-serif', 26, 'rgba(239,151,0,1.00)', '400', 'none', 'normal']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Text3}": [
                ["style", "top", '43px'],
                ["style", "letter-spacing", '2px'],
                ["style", "font-family", 'Tahoma, Geneva, sans-serif'],
                ["color", "color", 'rgba(239,151,0,1.00)'],
                ["style", "opacity", '1'],
                ["style", "left", '67px'],
                ["style", "font-size", '26px']
            ],
            "${_Teks_Box}": [
                ["style", "top", '-32px'],
                ["transform", "scaleY", '0.78'],
                ["style", "height", '333px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "width", '749px']
            ],
            "${_Text5}": [
                ["style", "top", '98px'],
                ["style", "opacity", '1'],
                ["style", "font-family", 'Trebuchet MS, Arial, Helvetica, sans-serif'],
                ["style", "left", '67px'],
                ["style", "font-size", '22px']
            ],
            "${symbolSelector}": [
                ["style", "height", '281px'],
                ["style", "width", '749px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2537,
            autoPlay: true,
            labels: {
                "a": 0,
                "b": 820,
                "c": 1856
            },
            timeline: [
                { id: "eid31667", tween: [ "style", "${_Teks_Box}", "opacity", '0', { fromValue: '1'}], position: 2000, duration: 537 },
                { id: "eid31669", tween: [ "style", "${_Text3}", "opacity", '0', { fromValue: '1'}], position: 2000, duration: 537 },
                { id: "eid31668", tween: [ "style", "${_Text5}", "opacity", '0', { fromValue: '1'}], position: 2000, duration: 537 }            ]
        }
    }
},
"teks3": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '-26px', '749px', '333px', 'auto', 'auto'],
                    id: 'Teks_Box',
                    transform: [[0, 0], [], [], ['1', '0.7']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/Teks%20Box.svg', '0px', '0px']
                },
                {
                    rect: ['67px', '114px', '600px', '178px', 'auto', 'auto'],
                    font: ['Trebuchet MS, Arial, Helvetica, sans-serif', 22, 'rgba(247,166,27,1)', '400', 'none', 'normal'],
                    id: 'Text5',
                    text: 'The package then is delivered to our kitchen in Indonesia. Throughout the delivery the package are well-refrigerated and kept fresh.',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['67px', '65px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['Tahoma, Geneva, sans-serif', 26, 'rgba(239,151,0,1.00)', '400', 'none', 'normal'],
                    id: 'Text3',
                    text: 'Fast and Fresh delivery',
                    align: 'left',
                    type: 'text'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Teks_Box}": [
                ["style", "top", '-26px'],
                ["transform", "scaleY", '0.7'],
                ["style", "height", '333px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "width", '749px']
            ],
            "${_Text3}": [
                ["style", "top", '65px'],
                ["style", "letter-spacing", '2px'],
                ["style", "opacity", '1'],
                ["color", "color", 'rgba(239,151,0,1.00)'],
                ["style", "font-family", 'Tahoma, Geneva, sans-serif'],
                ["style", "left", '67px'],
                ["style", "font-size", '26px']
            ],
            "${_Text5}": [
                ["style", "top", '114px'],
                ["style", "opacity", '1'],
                ["style", "font-family", 'Trebuchet MS, Arial, Helvetica, sans-serif'],
                ["style", "left", '67px'],
                ["style", "font-size", '22px']
            ],
            "${symbolSelector}": [
                ["style", "height", '281px'],
                ["style", "width", '749px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2537,
            autoPlay: true,
            labels: {
                "a": 0,
                "b": 820,
                "c": 1856
            },
            timeline: [
                { id: "eid31667", tween: [ "style", "${_Teks_Box}", "opacity", '0', { fromValue: '1'}], position: 2000, duration: 537 },
                { id: "eid31669", tween: [ "style", "${_Text3}", "opacity", '0', { fromValue: '1'}], position: 2000, duration: 537 },
                { id: "eid31668", tween: [ "style", "${_Text5}", "opacity", '0', { fromValue: '1'}], position: 2000, duration: 537 }            ]
        }
    }
},
"teks4": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '-27px', '749px', '333px', 'auto', 'auto'],
                    id: 'Teks_Box',
                    transform: [[0, 0], [], [], ['1', '0.84']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/Teks%20Box.svg', '0px', '0px']
                },
                {
                    rect: ['67px', '91px', '600px', '178px', 'auto', 'auto'],
                    font: ['Trebuchet MS, Arial, Helvetica, sans-serif', 22, 'rgba(247,166,27,1)', '400', 'none', 'normal'],
                    id: 'Text5',
                    text: 'The cheese and cream are mixed together with some eggs, flour, sugar, and some of our secret ingredients. This process is done in our specialized kitchen and is well monitored by our amazing bakers. Our ingredients are always fresh and top quality.',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['67px', '41px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['Tahoma, Geneva, sans-serif', 26, 'rgba(239,151,0,1.00)', '400', 'none', 'normal'],
                    id: 'Text3',
                    text: 'Mixing the ingridients',
                    align: 'left',
                    type: 'text'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Text3}": [
                ["style", "top", '41px'],
                ["style", "letter-spacing", '2px'],
                ["style", "font-family", 'Tahoma, Geneva, sans-serif'],
                ["color", "color", 'rgba(239,151,0,1.00)'],
                ["style", "opacity", '1'],
                ["style", "left", '67px'],
                ["style", "font-size", '26px']
            ],
            "${_Teks_Box}": [
                ["style", "top", '-27px'],
                ["transform", "scaleY", '0.84'],
                ["style", "height", '333px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "width", '749px']
            ],
            "${_Text5}": [
                ["style", "top", '91px'],
                ["style", "opacity", '1'],
                ["style", "font-family", 'Trebuchet MS, Arial, Helvetica, sans-serif'],
                ["style", "left", '67px'],
                ["style", "font-size", '22px']
            ],
            "${symbolSelector}": [
                ["style", "height", '281px'],
                ["style", "width", '749px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2537,
            autoPlay: true,
            labels: {
                "a": 0,
                "b": 820,
                "c": 1856
            },
            timeline: [
                { id: "eid31667", tween: [ "style", "${_Teks_Box}", "opacity", '0', { fromValue: '1'}], position: 2000, duration: 537 },
                { id: "eid31669", tween: [ "style", "${_Text3}", "opacity", '0', { fromValue: '1'}], position: 2000, duration: 537 },
                { id: "eid31668", tween: [ "style", "${_Text5}", "opacity", '0', { fromValue: '1'}], position: 2000, duration: 537 }            ]
        }
    }
},
"teks5": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '-37px', '749px', '333px', 'auto', 'auto'],
                    id: 'Teks_Box',
                    transform: [[0, 0], [], [], ['1', '0.79']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/Teks%20Box.svg', '0px', '0px']
                },
                {
                    rect: ['67px', '92px', '600px', '178px', 'auto', 'auto'],
                    font: ['Trebuchet MS, Arial, Helvetica, sans-serif', 22, 'rgba(247,166,27,1)', '400', 'none', 'normal'],
                    id: 'Text5',
                    text: 'The dough is then baked in our specially customized oven and refrigerated afterwards. This process takes about 7-8 hours. The dough could be baked and refrigerated more than once depending on the type of the cheesecake.',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['67px', '42px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['Tahoma, Geneva, sans-serif', 26, 'rgba(239,151,0,1.00)', '400', 'none', 'normal'],
                    id: 'Text3',
                    text: 'Baked and Refrigerated',
                    align: 'left',
                    type: 'text'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Teks_Box}": [
                ["style", "top", '-37px'],
                ["transform", "scaleY", '0.79'],
                ["style", "height", '333px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "width", '749px']
            ],
            "${_Text3}": [
                ["style", "top", '42px'],
                ["style", "letter-spacing", '2px'],
                ["style", "opacity", '1'],
                ["color", "color", 'rgba(239,151,0,1.00)'],
                ["style", "font-family", 'Tahoma, Geneva, sans-serif'],
                ["style", "left", '67px'],
                ["style", "font-size", '26px']
            ],
            "${_Text5}": [
                ["style", "top", '92px'],
                ["style", "opacity", '1'],
                ["style", "font-family", 'Trebuchet MS, Arial, Helvetica, sans-serif'],
                ["style", "left", '67px'],
                ["style", "font-size", '22px']
            ],
            "${symbolSelector}": [
                ["style", "height", '281px'],
                ["style", "width", '749px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2537,
            autoPlay: true,
            labels: {
                "a": 0,
                "b": 820,
                "c": 1856
            },
            timeline: [
                { id: "eid31667", tween: [ "style", "${_Teks_Box}", "opacity", '0', { fromValue: '1'}], position: 2000, duration: 537 },
                { id: "eid31669", tween: [ "style", "${_Text3}", "opacity", '0', { fromValue: '1'}], position: 2000, duration: 537 },
                { id: "eid31668", tween: [ "style", "${_Text5}", "opacity", '0', { fromValue: '1'}], position: 2000, duration: 537 }            ]
        }
    }
},
"teks6": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    id: 'Teks_Box',
                    rect: ['0px', '-32px', '749px', '333px', 'auto', 'auto'],
                    transform: [[0, 0], [], [], ['1', '0.77']],
                    fill: ['rgba(0,0,0,0)', 'images/Teks%20Box.svg', '0px', '0px']
                },
                {
                    type: 'text',
                    rect: ['67px', '97px', '600px', '178px', 'auto', 'auto'],
                    id: 'Text5',
                    text: 'After being refrigerated properly, the cheesecake is put in packages and is sent to our shops using our delivery truck that has its cooling mechanism to keep the packages fresh and well refrigerated. ',
                    align: 'left',
                    font: ['Trebuchet MS, Arial, Helvetica, sans-serif', 22, 'rgba(247,166,27,1)', '400', 'none', 'normal']
                },
                {
                    type: 'text',
                    rect: ['67px', '47px', 'auto', 'auto', 'auto', 'auto'],
                    id: 'Text3',
                    text: 'From the Kitchen to the Shop',
                    align: 'left',
                    font: ['Tahoma, Geneva, sans-serif', 26, 'rgba(239,151,0,1.00)', '400', 'none', 'normal']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Text3}": [
                ["style", "top", '47px'],
                ["style", "letter-spacing", '2px'],
                ["style", "font-family", 'Tahoma, Geneva, sans-serif'],
                ["color", "color", 'rgba(239,151,0,1.00)'],
                ["style", "opacity", '1'],
                ["style", "left", '67px'],
                ["style", "font-size", '26px']
            ],
            "${_Teks_Box}": [
                ["style", "top", '-32px'],
                ["transform", "scaleY", '0.77'],
                ["style", "height", '333px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "width", '749px']
            ],
            "${_Text5}": [
                ["style", "top", '97px'],
                ["style", "opacity", '1'],
                ["style", "font-family", 'Trebuchet MS, Arial, Helvetica, sans-serif'],
                ["style", "left", '67px'],
                ["style", "font-size", '22px']
            ],
            "${symbolSelector}": [
                ["style", "height", '281px'],
                ["style", "width", '749px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2537,
            autoPlay: true,
            labels: {
                "a": 0,
                "b": 820,
                "c": 1856
            },
            timeline: [
                { id: "eid31667", tween: [ "style", "${_Teks_Box}", "opacity", '0', { fromValue: '1'}], position: 2000, duration: 537 },
                { id: "eid31669", tween: [ "style", "${_Text3}", "opacity", '0', { fromValue: '1'}], position: 2000, duration: 537 },
                { id: "eid31668", tween: [ "style", "${_Text5}", "opacity", '0', { fromValue: '1'}], position: 2000, duration: 537 }            ]
        }
    }
},
"teks7": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    id: 'Teks_Box',
                    rect: ['0px', '-44px', '749px', '333px', 'auto', 'auto'],
                    transform: [[0, 0], [], [], ['1', '0.73']],
                    fill: ['rgba(0,0,0,0)', 'images/Teks%20Box.svg', '0px', '0px']
                },
                {
                    type: 'text',
                    rect: ['67px', '97px', '600px', '178px', 'auto', 'auto'],
                    id: 'Text5',
                    text: 'The cheesecakes are then added with dressings and toppings accordingly. Which of our cheesecakes do you want to order?',
                    align: 'left',
                    font: ['Trebuchet MS, Arial, Helvetica, sans-serif', 22, 'rgba(247,166,27,1)', '400', 'none', 'normal']
                },
                {
                    type: 'text',
                    rect: ['67px', '47px', 'auto', 'auto', 'auto', 'auto'],
                    id: 'Text3',
                    text: 'Place your Order!',
                    align: 'left',
                    font: ['Tahoma, Geneva, sans-serif', 26, 'rgba(239,151,0,1.00)', '400', 'none', 'normal']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Teks_Box}": [
                ["style", "top", '-44px'],
                ["transform", "scaleY", '0.73'],
                ["style", "height", '333px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "width", '749px']
            ],
            "${_Text3}": [
                ["style", "top", '47px'],
                ["style", "letter-spacing", '2px'],
                ["style", "opacity", '1'],
                ["color", "color", 'rgba(239,151,0,1.00)'],
                ["style", "font-family", 'Tahoma, Geneva, sans-serif'],
                ["style", "left", '67px'],
                ["style", "font-size", '26px']
            ],
            "${_Text5}": [
                ["style", "top", '97px'],
                ["style", "opacity", '1'],
                ["style", "font-family", 'Trebuchet MS, Arial, Helvetica, sans-serif'],
                ["style", "left", '67px'],
                ["style", "font-size", '22px']
            ],
            "${symbolSelector}": [
                ["style", "height", '281px'],
                ["style", "width", '749px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2537,
            autoPlay: true,
            labels: {
                "a": 0,
                "b": 820,
                "c": 1856
            },
            timeline: [
                { id: "eid31667", tween: [ "style", "${_Teks_Box}", "opacity", '0', { fromValue: '1'}], position: 2000, duration: 537 },
                { id: "eid31669", tween: [ "style", "${_Text3}", "opacity", '0', { fromValue: '1'}], position: 2000, duration: 537 },
                { id: "eid31668", tween: [ "style", "${_Text5}", "opacity", '0', { fromValue: '1'}], position: 2000, duration: 537 }            ]
        }
    }
},
"icontanya": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '67px', '99px', 'auto', 'auto'],
                    filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                    id: 'icon-tanyaa',
                    type: 'image',
                    cursor: ['pointer'],
                    fill: ['rgba(0,0,0,0)', 'images/icon-tanyaa.svg', '0px', '0px']
                },
                {
                    id: 'teksa',
                    type: 'rect',
                    rect: ['12px', '-281px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'teksa',
                symbolName: 'teksA',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_teksa}": [
                ["style", "top", '-281px'],
                ["style", "opacity", '0'],
                ["style", "left", '12px']
            ],
            "${_icon-tanyaa}": [
                ["subproperty", "filter.sepia", '0'],
                ["subproperty", "filter.contrast", '1'],
                ["style", "top", '0px'],
                ["style", "height", '99px'],
                ["style", "left", '0px'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '67px']
            ],
            "${symbolSelector}": [
                ["style", "height", '99px'],
                ["style", "width", '67px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 6000,
            autoPlay: true,
            labels: {
                "a": 0,
                "b": 2000,
                "c": 4000
            },
            timeline: [
                { id: "eid34614", tween: [ "style", "${_teksa}", "opacity", '1', { fromValue: '0'}], position: 4000, duration: 420 },
                { id: "eid34322", tween: [ "subproperty", "${_icon-tanyaa}", "filter.sepia", '0', { fromValue: '0'}], position: 2000, duration: 0 },
                { id: "eid35227", tween: [ "subproperty", "${_icon-tanyaa}", "filter.sepia", '1', { fromValue: '0'}], position: 4000, duration: 0 },
                { id: "eid34320", tween: [ "subproperty", "${_icon-tanyaa}", "filter.contrast", '1', { fromValue: '1'}], position: 0, duration: 0 },
                { id: "eid34321", tween: [ "subproperty", "${_icon-tanyaa}", "filter.contrast", '2', { fromValue: '1'}], position: 2000, duration: 0 }            ]
        }
    }
},
"teksA": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    transform: [[0, 0], [], [], ['0.84', '0.87']],
                    id: 'Teks_Box',
                    type: 'image',
                    rect: ['-75px', '-47px', '749px', '333px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Teks%20Box.svg', '0px', '0px']
                },
                {
                    font: ['Tahoma, Geneva, sans-serif', 22, 'rgba(239,151,0,1)', '400', 'none', 'normal'],
                    type: 'text',
                    id: 'TextCopy5',
                    text: 'Chocolate',
                    align: 'left',
                    rect: ['88px', '196px', '131px', '31px', 'auto', 'auto']
                },
                {
                    font: ['Tahoma, Geneva, sans-serif', 26, 'rgba(239,151,0,1.00)', '400', 'none', 'normal'],
                    type: 'text',
                    id: 'Text3',
                    text: 'Which of these flavors do you prefer?',
                    align: 'left',
                    rect: ['65px', '11px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    transform: [[0, 0], [], [], ['0.15', '0.15']],
                    id: 'icon-straw2',
                    type: 'image',
                    rect: ['-135px', '-315px', '876px', '876px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/icon-straw.svg', '0px', '0px']
                },
                {
                    transform: [[0, 0], [], [], ['0.15', '0.15']],
                    id: 'icon_lemon2',
                    type: 'image',
                    rect: ['31px', '-315px', '876px', '876px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/icon_lemon.svg', '0px', '0px']
                },
                {
                    font: ['Tahoma, Geneva, sans-serif', 22, 'rgba(239,151,0,1)', '400', 'none', 'normal'],
                    type: 'text',
                    id: 'TextCopy',
                    text: 'Strawberry<br>',
                    align: 'left',
                    rect: ['248px', '196px', '131px', '31px', 'auto', 'auto']
                },
                {
                    font: ['Tahoma, Geneva, sans-serif', 22, 'rgba(239,151,0,1)', '400', 'none', 'normal'],
                    type: 'text',
                    id: 'TextCopy2',
                    text: 'Lemon',
                    align: 'left',
                    rect: ['433px', '196px', '131px', '31px', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '281px'],
                ["style", "width", '749px']
            ],
            "${_icon-straw2}": [
                ["style", "top", '-315px'],
                ["transform", "scaleX", '0.15'],
                ["transform", "scaleY", '0.15'],
                ["style", "left", '-135px']
            ],
            "${_Teks_Box}": [
                ["style", "top", '-47px'],
                ["transform", "scaleY", '0.87'],
                ["transform", "scaleX", '0.84'],
                ["style", "height", '333px'],
                ["style", "opacity", '1'],
                ["style", "left", '-75px'],
                ["style", "width", '749px']
            ],
            "${_TextCopy5}": [
                ["style", "top", '196px'],
                ["style", "left", '88px'],
                ["style", "font-size", '22px']
            ],
            "${_Text3}": [
                ["style", "top", '11px'],
                ["style", "letter-spacing", '2px'],
                ["style", "font-family", 'Tahoma, Geneva, sans-serif'],
                ["color", "color", 'rgba(239,151,0,1.00)'],
                ["style", "opacity", '1'],
                ["style", "left", '65px'],
                ["style", "font-size", '26px']
            ],
            "${_icon_lemon2}": [
                ["transform", "scaleX", '0.15'],
                ["style", "top", '-315px'],
                ["style", "left", '31px'],
                ["transform", "scaleY", '0.15']
            ],
            "${_TextCopy}": [
                ["style", "top", '196px'],
                ["style", "left", '248px'],
                ["style", "font-size", '22px']
            ],
            "${_TextCopy2}": [
                ["style", "top", '196px'],
                ["style", "left", '433px'],
                ["style", "font-size", '22px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1856,
            autoPlay: true,
            labels: {
                "a": 0,
                "b": 820,
                "c": 1856
            },
            timeline: [
            ]
        }
    }
},
"QUIZZZZ": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '67px', '99px', 'auto', 'auto'],
                    id: 'tanya_bru2',
                    type: 'image',
                    cursor: ['pointer'],
                    fill: ['rgba(0,0,0,0)', 'images/tanya%20bru.svg', '0px', '0px']
                },
                {
                    id: 'teksa',
                    type: 'rect',
                    rect: ['12px', '-281px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'teksa',
                symbolName: 'teksA',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_teksa}": [
                ["style", "top", '-281px'],
                ["style", "opacity", '0'],
                ["style", "left", '12px']
            ],
            "${_tanya_bru2}": [
                ["subproperty", "filter.sepia", '0'],
                ["subproperty", "filter.contrast", '1'],
                ["style", "top", '0px'],
                ["style", "height", '99px'],
                ["style", "left", '0px'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '67px']
            ],
            "${symbolSelector}": [
                ["style", "height", '99px'],
                ["style", "width", '67px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 6277,
            autoPlay: true,
            labels: {
                "b": 2270,
                "c": 4972
            },
            timeline: [
                { id: "eid35408", tween: [ "subproperty", "${_tanya_bru2}", "filter.contrast", '1', { fromValue: '1'}], position: 0, duration: 0 },
                { id: "eid35409", tween: [ "subproperty", "${_tanya_bru2}", "filter.contrast", '2', { fromValue: '1'}], position: 2270, duration: 0 },
                { id: "eid35519", tween: [ "subproperty", "${_tanya_bru2}", "filter.sepia", '0', { fromValue: '0'}], position: 2270, duration: 0 },
                { id: "eid35520", tween: [ "subproperty", "${_tanya_bru2}", "filter.sepia", '1', { fromValue: '0'}], position: 4972, duration: 0 },
                { id: "eid35521", tween: [ "style", "${_teksa}", "opacity", '1', { fromValue: '0'}], position: 4972, duration: 1304 }            ]
        }
    }
},
"QUIZ_1": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    id: 'tanya_bru2',
                    rect: ['0px', '0px', '67px', '99px', 'auto', 'auto'],
                    cursor: ['pointer'],
                    fill: ['rgba(0,0,0,0)', 'images/tanya%20bru.svg', '0px', '0px']
                },
                {
                    id: 'teksaCopy',
                    type: 'rect',
                    rect: ['12px', '-281px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    type: 'image',
                    rect: ['-300px', '-315px', '876px', '876px', 'auto', 'auto'],
                    id: 'icon_coklat2Copy',
                    transform: [[0, 0], [], [], ['0.15', '0.15']],
                    cursor: ['pointer'],
                    fill: ['rgba(0,0,0,0)', 'images/icon_coklat.svg', '0px', '0px']
                }
            ],
            symbolInstances: [
            {
                id: 'teksaCopy',
                symbolName: 'teksA',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_TextCopy3}": [
                ["style", "top", '196px'],
                ["style", "left", '88px'],
                ["style", "font-size", '22px']
            ],
            "${_teksaCopy}": [
                ["style", "top", '-281px'],
                ["style", "opacity", '0'],
                ["style", "left", '12px']
            ],
            "${symbolSelector}": [
                ["style", "height", '105px'],
                ["style", "width", '78px']
            ],
            "${_tanya_bru2}": [
                ["style", "top", '0px'],
                ["subproperty", "filter.contrast", '1'],
                ["subproperty", "filter.sepia", '0.000000'],
                ["style", "height", '99px'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '0px'],
                ["style", "width", '67px']
            ],
            "${_icon_coklat2Copy}": [
                ["subproperty", "filter.sepia", '0'],
                ["transform", "scaleY", '0.15'],
                ["subproperty", "filter.contrast", '1'],
                ["style", "cursor", 'pointer'],
                ["transform", "scaleX", '0.15'],
                ["style", "opacity", '0'],
                ["style", "left", '-294px'],
                ["style", "top", '-595px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 10768,
            autoPlay: true,
            labels: {
                "a": 0,
                "b": 1000,
                "c": 5676,
                "d": 7225,
                "e": 10654
            },
            timeline: [
                { id: "eid36027", tween: [ "subproperty", "${_tanya_bru2}", "filter.contrast", '1', { fromValue: '1'}], position: 0, duration: 0 },
                { id: "eid36028", tween: [ "subproperty", "${_tanya_bru2}", "filter.contrast", '2', { fromValue: '1'}], position: 1000, duration: 0 },
                { id: "eid36446", tween: [ "style", "${_icon_coklat2Copy}", "left", '-294px', { fromValue: '-294px'}], position: 7225, duration: 0 },
                { id: "eid36441", tween: [ "subproperty", "${_icon_coklat2Copy}", "filter.sepia", '0', { fromValue: '0'}], position: 7225, duration: 0 },
                { id: "eid36442", tween: [ "subproperty", "${_icon_coklat2Copy}", "filter.sepia", '1', { fromValue: '0'}], position: 10654, duration: 0 },
                { id: "eid36026", tween: [ "style", "${_teksaCopy}", "opacity", '1', { fromValue: '0'}], position: 5676, duration: 125 },
                { id: "eid36148", tween: [ "style", "${_teksaCopy}", "opacity", '0', { fromValue: '1'}], position: 10654, duration: 114 },
                { id: "eid36445", tween: [ "style", "${_icon_coklat2Copy}", "top", '-595px', { fromValue: '-595px'}], position: 7225, duration: 0 },
                { id: "eid36029", tween: [ "subproperty", "${_tanya_bru2}", "filter.sepia", '0.000000', { fromValue: '0.000000'}], position: 1000, duration: 0 },
                { id: "eid36030", tween: [ "subproperty", "${_tanya_bru2}", "filter.sepia", '1', { fromValue: '0.000000'}], position: 5676, duration: 0 },
                { id: "eid36443", tween: [ "subproperty", "${_icon_coklat2Copy}", "filter.contrast", '1', { fromValue: '1'}], position: 0, duration: 0 },
                { id: "eid37034", tween: [ "subproperty", "${_icon_coklat2Copy}", "filter.contrast", '2', { fromValue: '1'}], position: 7225, duration: 0 },
                { id: "eid37143", tween: [ "subproperty", "${_icon_coklat2Copy}", "filter.contrast", '1', { fromValue: '2'}], position: 7799, duration: 1568 },
                { id: "eid36448", tween: [ "style", "${_icon_coklat2Copy}", "opacity", '1', { fromValue: '0'}], position: 5676, duration: 125 },
                { id: "eid36447", tween: [ "style", "${_icon_coklat2Copy}", "opacity", '0', { fromValue: '1'}], position: 10654, duration: 114 }            ]
        }
    }
},
"QUIZ_2": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '67px', '99px', 'auto', 'auto'],
                    id: 'tanya_bru2',
                    type: 'image',
                    cursor: ['pointer'],
                    fill: ['rgba(0,0,0,0)', 'images/tanya%20bru.svg', '0px', '0px']
                },
                {
                    id: 'teksB',
                    type: 'rect',
                    rect: ['90px', '-82px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    type: 'image',
                    rect: ['-283px', '-346px', '876px', '876px', 'auto', 'auto'],
                    id: 'icon-single_slice2',
                    transform: [[0, 0], [], [], ['0.15', '0.15']],
                    cursor: ['pointer'],
                    fill: ['rgba(0,0,0,0)', 'images/icon-single%20slice.svg', '0px', '0px']
                }
            ],
            symbolInstances: [
            {
                id: 'teksB',
                symbolName: 'teksB',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_TextCopy3}": [
                ["style", "top", '196px'],
                ["style", "left", '88px'],
                ["style", "font-size", '22px']
            ],
            "${symbolSelector}": [
                ["style", "height", '105px'],
                ["style", "width", '78px']
            ],
            "${_tanya_bru2}": [
                ["subproperty", "filter.sepia", '0.000000'],
                ["subproperty", "filter.contrast", '1'],
                ["style", "top", '0px'],
                ["style", "height", '99px'],
                ["style", "left", '0px'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '67px']
            ],
            "${_icon-single_slice2}": [
                ["style", "top", '-399px'],
                ["subproperty", "filter.contrast", '1'],
                ["transform", "scaleY", '0.15'],
                ["style", "cursor", 'pointer'],
                ["transform", "scaleX", '0.15'],
                ["style", "opacity", '0'],
                ["style", "left", '-219px'],
                ["subproperty", "filter.sepia", '0']
            ],
            "${_teksB}": [
                ["style", "top", '-82px'],
                ["style", "opacity", '0'],
                ["style", "left", '90px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 10768,
            autoPlay: false,
            labels: {
                "a": 0,
                "b": 1000,
                "c": 5676,
                "d": 7225,
                "e": 10654
            },
            timeline: [
                { id: "eid37432", tween: [ "style", "${_teksB}", "opacity", '1', { fromValue: '0'}], position: 5676, duration: 125 },
                { id: "eid37433", tween: [ "style", "${_teksB}", "opacity", '0', { fromValue: '1'}], position: 10654, duration: 114 },
                { id: "eid37472", tween: [ "subproperty", "${_icon-single_slice2}", "filter.contrast", '1', { fromValue: '1'}], position: 0, duration: 0 },
                { id: "eid37473", tween: [ "subproperty", "${_icon-single_slice2}", "filter.contrast", '2', { fromValue: '1'}], position: 7225, duration: 0 },
                { id: "eid37474", tween: [ "subproperty", "${_icon-single_slice2}", "filter.contrast", '1', { fromValue: '2'}], position: 7799, duration: 1568 },
                { id: "eid37475", tween: [ "style", "${_icon-single_slice2}", "opacity", '1', { fromValue: '0'}], position: 5676, duration: 125 },
                { id: "eid37476", tween: [ "style", "${_icon-single_slice2}", "opacity", '0', { fromValue: '1'}], position: 10654, duration: 114 },
                { id: "eid37478", tween: [ "style", "${_icon-single_slice2}", "top", '-399px', { fromValue: '-399px'}], position: 7225, duration: 0 },
                { id: "eid37477", tween: [ "style", "${_icon-single_slice2}", "left", '-219px', { fromValue: '-219px'}], position: 7225, duration: 0 },
                { id: "eid37470", tween: [ "subproperty", "${_icon-single_slice2}", "filter.sepia", '0', { fromValue: '0'}], position: 7225, duration: 0 },
                { id: "eid37471", tween: [ "subproperty", "${_icon-single_slice2}", "filter.sepia", '1', { fromValue: '0'}], position: 10654, duration: 0 },
                { id: "eid36027", tween: [ "subproperty", "${_tanya_bru2}", "filter.contrast", '1', { fromValue: '1'}], position: 0, duration: 0 },
                { id: "eid36028", tween: [ "subproperty", "${_tanya_bru2}", "filter.contrast", '2', { fromValue: '1'}], position: 1000, duration: 0 },
                { id: "eid36029", tween: [ "subproperty", "${_tanya_bru2}", "filter.sepia", '0.000000', { fromValue: '0.000000'}], position: 1000, duration: 0 },
                { id: "eid36030", tween: [ "subproperty", "${_tanya_bru2}", "filter.sepia", '1', { fromValue: '0.000000'}], position: 5676, duration: 0 }            ]
        }
    }
},
"teksB": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    transform: [[0, 0], [], [], ['0.59', '0.87']],
                    id: 'Teks_Box',
                    type: 'image',
                    rect: ['-154px', '-47px', '749px', '333px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Teks%20Box.svg', '0px', '0px']
                },
                {
                    font: ['Tahoma, Geneva, sans-serif', 22, 'rgba(239,151,0,1)', '400', 'none', 'normal'],
                    type: 'text',
                    id: 'TextCopy5',
                    text: 'Single Slice',
                    align: 'left',
                    rect: ['78px', '196px', '131px', '31px', 'auto', 'auto']
                },
                {
                    font: ['Tahoma, Geneva, sans-serif', 26, 'rgba(239,151,0,1.00)', '400', 'none', 'normal'],
                    type: 'text',
                    id: 'Text3',
                    text: 'Would you rather buy...',
                    align: 'left',
                    rect: ['67px', '5px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    font: ['Tahoma, Geneva, sans-serif', 22, 'rgba(239,151,0,1)', '400', 'none', 'normal'],
                    type: 'text',
                    id: 'TextCopy',
                    text: 'Whole Cake',
                    align: 'left',
                    rect: ['253px', '196px', '131px', '31px', 'auto', 'auto']
                },
                {
                    transform: [[0, 0], [], [], ['0.15', '0.15']],
                    id: 'icon_whole_cake2',
                    type: 'image',
                    rect: ['-127px', '-318px', '876px', '876px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/icon_whole%20cake.svg', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_TextCopy5}": [
                ["style", "top", '196px'],
                ["style", "left", '78px'],
                ["style", "font-size", '22px']
            ],
            "${symbolSelector}": [
                ["style", "height", '281px'],
                ["style", "width", '749px']
            ],
            "${_Text3}": [
                ["style", "top", '5px'],
                ["style", "letter-spacing", '2px'],
                ["style", "opacity", '1'],
                ["color", "color", 'rgba(239,151,0,1.00)'],
                ["style", "font-family", 'Tahoma, Geneva, sans-serif'],
                ["style", "left", '67px'],
                ["style", "font-size", '26px']
            ],
            "${_icon_whole_cake2}": [
                ["style", "top", '-318px'],
                ["transform", "scaleY", '0.15'],
                ["style", "left", '-127px'],
                ["transform", "scaleX", '0.15']
            ],
            "${_TextCopy}": [
                ["style", "top", '196px'],
                ["style", "left", '253px'],
                ["style", "font-size", '22px']
            ],
            "${_Teks_Box}": [
                ["style", "top", '-47px'],
                ["transform", "scaleY", '0.87'],
                ["style", "height", '333px'],
                ["transform", "scaleX", '0.59'],
                ["style", "opacity", '1'],
                ["style", "left", '-154px'],
                ["style", "width", '749px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1856,
            autoPlay: true,
            labels: {
                "a": 0,
                "b": 820,
                "c": 1856
            },
            timeline: [
            ]
        }
    }
},
"QUIZ_3": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    id: 'tanya_bru2',
                    rect: ['0px', '0px', '67px', '99px', 'auto', 'auto'],
                    cursor: ['pointer'],
                    fill: ['rgba(0,0,0,0)', 'images/tanya%20bru.svg', '0px', '0px']
                },
                {
                    id: 'teksC',
                    type: 'rect',
                    rect: ['0px', '-312px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    transform: [[0, 0], [], [], ['0.15', '0.15']],
                    type: 'image',
                    id: 'icon_drinkinWater2',
                    rect: ['-302px', '-306px', '876px', '876px', 'auto', 'auto'],
                    cursor: ['pointer'],
                    fill: ['rgba(0,0,0,0)', 'images/icon_drinkinWater.svg', '0px', '0px']
                }
            ],
            symbolInstances: [
            {
                id: 'teksC',
                symbolName: 'teksC',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_TextCopy3}": [
                ["style", "top", '196px'],
                ["style", "left", '88px'],
                ["style", "font-size", '22px']
            ],
            "${symbolSelector}": [
                ["style", "height", '105px'],
                ["style", "width", '78px']
            ],
            "${_tanya_bru2}": [
                ["style", "top", '0px'],
                ["subproperty", "filter.contrast", '1'],
                ["subproperty", "filter.sepia", '0.000000'],
                ["style", "height", '99px'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '0px'],
                ["style", "width", '67px']
            ],
            "${_teksC}": [
                ["style", "top", '-312px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ],
            "${_icon_drinkinWater2}": [
                ["style", "top", '-621px'],
                ["subproperty", "filter.contrast", '1'],
                ["transform", "scaleY", '0.15'],
                ["style", "cursor", 'pointer'],
                ["transform", "scaleX", '0.15'],
                ["style", "opacity", '0'],
                ["style", "left", '-305px'],
                ["subproperty", "filter.sepia", '0']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 10768,
            autoPlay: false,
            labels: {
                "a": 0,
                "b": 1000,
                "c": 5676,
                "d": 7225,
                "e": 10654
            },
            timeline: [
                { id: "eid38201", tween: [ "subproperty", "${_icon_drinkinWater2}", "filter.sepia", '0', { fromValue: '0'}], position: 7225, duration: 0 },
                { id: "eid38202", tween: [ "subproperty", "${_icon_drinkinWater2}", "filter.sepia", '1', { fromValue: '0'}], position: 10654, duration: 0 },
                { id: "eid38209", tween: [ "style", "${_icon_drinkinWater2}", "top", '-621px', { fromValue: '-621px'}], position: 7225, duration: 0 },
                { id: "eid38208", tween: [ "style", "${_icon_drinkinWater2}", "left", '-305px', { fromValue: '-305px'}], position: 7225, duration: 0 },
                { id: "eid38206", tween: [ "style", "${_icon_drinkinWater2}", "opacity", '1', { fromValue: '0'}], position: 5676, duration: 125 },
                { id: "eid38207", tween: [ "style", "${_icon_drinkinWater2}", "opacity", '0', { fromValue: '1'}], position: 10654, duration: 114 },
                { id: "eid36027", tween: [ "subproperty", "${_tanya_bru2}", "filter.contrast", '1', { fromValue: '1'}], position: 0, duration: 0 },
                { id: "eid36028", tween: [ "subproperty", "${_tanya_bru2}", "filter.contrast", '2', { fromValue: '1'}], position: 1000, duration: 0 },
                { id: "eid36029", tween: [ "subproperty", "${_tanya_bru2}", "filter.sepia", '0.000000', { fromValue: '0.000000'}], position: 1000, duration: 0 },
                { id: "eid36030", tween: [ "subproperty", "${_tanya_bru2}", "filter.sepia", '1', { fromValue: '0.000000'}], position: 5676, duration: 0 },
                { id: "eid38203", tween: [ "subproperty", "${_icon_drinkinWater2}", "filter.contrast", '1', { fromValue: '1'}], position: 0, duration: 0 },
                { id: "eid38204", tween: [ "subproperty", "${_icon_drinkinWater2}", "filter.contrast", '2', { fromValue: '1'}], position: 7225, duration: 0 },
                { id: "eid38205", tween: [ "subproperty", "${_icon_drinkinWater2}", "filter.contrast", '1', { fromValue: '2'}], position: 7799, duration: 1568 },
                { id: "eid38199", tween: [ "style", "${_teksC}", "opacity", '1', { fromValue: '0'}], position: 5676, duration: 125 },
                { id: "eid38200", tween: [ "style", "${_teksC}", "opacity", '0', { fromValue: '1'}], position: 10654, duration: 114 }            ]
        }
    }
},
"teksC": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    transform: [[0, 0], [], [], ['0.82', '1.03']],
                    id: 'Teks_Box',
                    type: 'image',
                    rect: ['-67px', '-47px', '749px', '333px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Teks%20Box.svg', '0px', '0px']
                },
                {
                    font: ['Tahoma, Geneva, sans-serif', 22, 'rgba(239,151,0,1)', '400', 'none', 'normal'],
                    type: 'text',
                    id: 'TextCopy5',
                    text: 'Water',
                    align: 'left',
                    rect: ['99px', '209px', '131px', '31px', 'auto', 'auto']
                },
                {
                    font: ['Tahoma, Geneva, sans-serif', 26, 'rgba(239,151,0,1.00)', '400', 'none', 'normal'],
                    type: 'text',
                    id: 'Text3',
                    text: 'While eating a cheesecake,<br>would you rather drink...',
                    align: 'center',
                    rect: ['117px', '-16px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    font: ['Tahoma, Geneva, sans-serif', 22, 'rgba(239,151,0,1)', '400', 'none', 'normal'],
                    type: 'text',
                    id: 'TextCopy',
                    text: 'Soda',
                    align: 'left',
                    rect: ['277px', '209px', '131px', '31px', 'auto', 'auto']
                },
                {
                    font: ['Tahoma, Geneva, sans-serif', 22, 'rgba(239,151,0,1)', '400', 'none', 'normal'],
                    type: 'text',
                    id: 'Text',
                    text: 'Tea',
                    align: 'left',
                    rect: ['464px', '209px', '131px', '31px', 'auto', 'auto']
                },
                {
                    transform: [[0, 0], [], [], ['0.15', '0.15']],
                    id: 'icon_sode2',
                    type: 'image',
                    rect: ['-126px', '-306px', '876px', '876px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/icon_sode.svg', '0px', '0px']
                },
                {
                    transform: [[0, 0], [], [], ['0.15', '0.15']],
                    id: 'icon_tea2',
                    type: 'image',
                    rect: ['51px', '-306px', '876px', '876px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/icon_tea.svg', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '281px'],
                ["style", "width", '749px']
            ],
            "${_Teks_Box}": [
                ["style", "top", '-47px'],
                ["transform", "scaleY", '1.03'],
                ["transform", "scaleX", '0.82'],
                ["style", "height", '333px'],
                ["style", "opacity", '1'],
                ["style", "left", '-67px'],
                ["style", "width", '749px']
            ],
            "${_Text}": [
                ["style", "top", '209px'],
                ["style", "left", '464px'],
                ["style", "font-size", '22px']
            ],
            "${_TextCopy5}": [
                ["style", "top", '209px'],
                ["style", "left", '99px'],
                ["style", "font-size", '22px']
            ],
            "${_Text3}": [
                ["style", "top", '-16px'],
                ["style", "letter-spacing", '2px'],
                ["style", "text-align", 'center'],
                ["style", "font-family", 'Tahoma, Geneva, sans-serif'],
                ["color", "color", 'rgba(239,151,0,1.00)'],
                ["style", "opacity", '1'],
                ["style", "left", '117px'],
                ["style", "font-size", '26px']
            ],
            "${_icon_sode2}": [
                ["transform", "scaleX", '0.15'],
                ["style", "top", '-306px'],
                ["transform", "scaleY", '0.15'],
                ["style", "left", '-126px']
            ],
            "${_TextCopy}": [
                ["style", "top", '209px'],
                ["style", "left", '277px'],
                ["style", "font-size", '22px']
            ],
            "${_icon_tea2}": [
                ["transform", "scaleX", '0.15'],
                ["style", "top", '-306px'],
                ["transform", "scaleY", '0.15'],
                ["style", "left", '51px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1856,
            autoPlay: true,
            labels: {
                "a": 0,
                "b": 820,
                "c": 1856
            },
            timeline: [
            ]
        }
    }
},
"teksD": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    transform: [[0, 0], [], [], ['0.56999', '1.03']],
                    id: 'Teks_Box',
                    type: 'image',
                    rect: ['156px', '-47px', '749px', '333px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Teks%20Box.svg', '0px', '0px']
                },
                {
                    font: ['Tahoma, Geneva, sans-serif', 22, 'rgba(239,151,0,1)', '400', 'none', 'normal'],
                    type: 'text',
                    id: 'TextCopy5',
                    text: 'Our Shop',
                    align: 'left',
                    rect: ['398px', '211px', '131px', '31px', 'auto', 'auto']
                },
                {
                    font: ['Tahoma, Geneva, sans-serif', 26, 'rgba(239,151,0,1.00)', '400', 'none', 'normal'],
                    type: 'text',
                    id: 'Text3',
                    text: 'Would you rather eat <br>Cizz Cheesecakes at...',
                    align: 'center',
                    rect: ['382px', '-17px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    font: ['Tahoma, Geneva, sans-serif', 22, 'rgba(239,151,0,1)', '400', 'none', 'normal'],
                    type: 'text',
                    id: 'TextCopy',
                    text: 'Home',
                    align: 'left',
                    rect: ['583px', '211px', '131px', '31px', 'auto', 'auto']
                },
                {
                    transform: [[0, 0], [], [], ['0.15', '0.15']],
                    id: 'icon_home2',
                    type: 'image',
                    rect: ['175px', '-304px', '876px', '876px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/icon_home.svg', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_TextCopy5}": [
                ["style", "top", '211px'],
                ["style", "left", '398px'],
                ["style", "font-size", '22px']
            ],
            "${symbolSelector}": [
                ["style", "height", '281px'],
                ["style", "width", '749px']
            ],
            "${_Text3}": [
                ["style", "top", '-17px'],
                ["style", "letter-spacing", '2px'],
                ["style", "text-align", 'center'],
                ["style", "opacity", '1'],
                ["color", "color", 'rgba(239,151,0,1.00)'],
                ["style", "font-family", 'Tahoma, Geneva, sans-serif'],
                ["style", "left", '382px'],
                ["style", "font-size", '26px']
            ],
            "${_Teks_Box}": [
                ["style", "top", '-47px'],
                ["transform", "scaleY", '1.03'],
                ["style", "height", '333px'],
                ["transform", "scaleX", '0.56999'],
                ["style", "opacity", '1'],
                ["style", "left", '156px'],
                ["style", "width", '749px']
            ],
            "${_TextCopy}": [
                ["style", "top", '211px'],
                ["style", "left", '583px'],
                ["style", "font-size", '22px']
            ],
            "${_icon_home2}": [
                ["style", "top", '-304px'],
                ["transform", "scaleY", '0.15'],
                ["style", "left", '175px'],
                ["transform", "scaleX", '0.15']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1856,
            autoPlay: true,
            labels: {
                "a": 0,
                "b": 820,
                "c": 1856
            },
            timeline: [
            ]
        }
    }
},
"QUIZ_4": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '67px', '99px', 'auto', 'auto'],
                    id: 'tanya_bru2',
                    type: 'image',
                    cursor: ['pointer'],
                    fill: ['rgba(0,0,0,0)', 'images/tanya%20bru.svg', '0px', '0px']
                },
                {
                    id: 'teksD',
                    type: 'rect',
                    rect: ['-778px', '-176px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    transform: [[0, 0], [], [], ['0.15', '0.15']],
                    id: 'icon_shop2',
                    type: 'image',
                    rect: ['-973px', '-601px', '876px', '876px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/icon_shop.svg', '0px', '0px']
                }
            ],
            symbolInstances: [
            {
                id: 'teksD',
                symbolName: 'teksD',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_TextCopy3}": [
                ["style", "top", '196px'],
                ["style", "left", '88px'],
                ["style", "font-size", '22px']
            ],
            "${_icon_shop2}": [
                ["style", "top", '-478px'],
                ["transform", "scaleY", '0.15'],
                ["subproperty", "filter.contrast", '1'],
                ["transform", "scaleX", '0.15'],
                ["style", "opacity", '0'],
                ["style", "left", '-770px'],
                ["subproperty", "filter.sepia", '0']
            ],
            "${symbolSelector}": [
                ["style", "height", '105px'],
                ["style", "width", '78px']
            ],
            "${_tanya_bru2}": [
                ["subproperty", "filter.sepia", '0.000000'],
                ["subproperty", "filter.contrast", '1'],
                ["style", "top", '0px'],
                ["style", "height", '99px'],
                ["style", "left", '0px'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '67px']
            ],
            "${_teksD}": [
                ["style", "top", '-176px'],
                ["style", "opacity", '0'],
                ["style", "left", '-778px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 10768,
            autoPlay: true,
            labels: {
                "a": 0,
                "b": 1000,
                "c": 5676,
                "d": 7225,
                "e": 10654
            },
            timeline: [
                { id: "eid38534", tween: [ "style", "${_teksD}", "opacity", '1', { fromValue: '0'}], position: 5676, duration: 125 },
                { id: "eid38535", tween: [ "style", "${_teksD}", "opacity", '0', { fromValue: '1'}], position: 10654, duration: 114 },
                { id: "eid38544", tween: [ "style", "${_icon_shop2}", "top", '-478px', { fromValue: '-478px'}], position: 7225, duration: 0 },
                { id: "eid38541", tween: [ "style", "${_icon_shop2}", "opacity", '1', { fromValue: '0'}], position: 5676, duration: 125 },
                { id: "eid38542", tween: [ "style", "${_icon_shop2}", "opacity", '0', { fromValue: '1'}], position: 10654, duration: 114 },
                { id: "eid38538", tween: [ "subproperty", "${_icon_shop2}", "filter.contrast", '1', { fromValue: '1'}], position: 0, duration: 0 },
                { id: "eid38539", tween: [ "subproperty", "${_icon_shop2}", "filter.contrast", '2', { fromValue: '1'}], position: 7225, duration: 0 },
                { id: "eid38540", tween: [ "subproperty", "${_icon_shop2}", "filter.contrast", '1', { fromValue: '2'}], position: 7799, duration: 1568 },
                { id: "eid36027", tween: [ "subproperty", "${_tanya_bru2}", "filter.contrast", '1', { fromValue: '1'}], position: 0, duration: 0 },
                { id: "eid36028", tween: [ "subproperty", "${_tanya_bru2}", "filter.contrast", '2', { fromValue: '1'}], position: 1000, duration: 0 },
                { id: "eid36029", tween: [ "subproperty", "${_tanya_bru2}", "filter.sepia", '0.000000', { fromValue: '0.000000'}], position: 1000, duration: 0 },
                { id: "eid36030", tween: [ "subproperty", "${_tanya_bru2}", "filter.sepia", '1', { fromValue: '0.000000'}], position: 5676, duration: 0 },
                { id: "eid38536", tween: [ "subproperty", "${_icon_shop2}", "filter.sepia", '0', { fromValue: '0'}], position: 7225, duration: 0 },
                { id: "eid38537", tween: [ "subproperty", "${_icon_shop2}", "filter.sepia", '1', { fromValue: '0'}], position: 10654, duration: 0 },
                { id: "eid38543", tween: [ "style", "${_icon_shop2}", "left", '-770px', { fromValue: '-770px'}], position: 7225, duration: 0 }            ]
        }
    }
},
"burst": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['855px', '2109px', '378px', '378px', 'auto', 'auto'],
                    id: 'burst22',
                    transform: [[0, 0], [], [], ['0.67273', '0.67273']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/burst2.svg', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_burst22}": [
                ["style", "top", '2109px'],
                ["transform", "scaleY", '0.67273'],
                ["transform", "rotateZ", '0deg'],
                ["transform", "scaleX", '0.67273'],
                ["style", "left", '855px']
            ],
            "${symbolSelector}": [
                ["style", "height", '0px'],
                ["style", "width", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 3806,
            autoPlay: true,
            labels: {
                "a": 0
            },
            timeline: [
                { id: "eid40625", tween: [ "transform", "${_burst22}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 0, duration: 3806, easing: "easeInOutBack" }            ]
        }
    }
},
"lingkaran_titik2": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'garis_titik22',
                    type: 'image',
                    rect: ['0px', '0px', '141px', '141px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/garis_titik2.svg', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '141px'],
                ["style", "width", '141px']
            ],
            "${_garis_titik22}": [
                ["style", "top", '0px'],
                ["transform", "rotateZ", '0deg'],
                ["style", "height", '141px'],
                ["style", "left", '0px'],
                ["style", "width", '141px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 4464,
            autoPlay: true,
            labels: {
                "a": 0
            },
            timeline: [
                { id: "eid40889", tween: [ "transform", "${_garis_titik22}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 0, duration: 4464 }            ]
        }
    }
},
"circularBUTTON-outro": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'icon_outro2',
                    type: 'rect',
                    rect: ['0', '0', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'chocolate_cake_photo',
                    type: 'image',
                    rect: ['1110px', '-607px', '647px', '647px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/chocolate_cake_photo.png', '0px', '0px']
                },
                {
                    id: 'Teks_Box',
                    type: 'image',
                    rect: ['1106px', '-93px', '577px', '257px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Teks%20Box.svg', '0px', '0px']
                }
            ],
            symbolInstances: [
            {
                id: 'icon_outro2',
                symbolName: 'icon_outro2',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_Teks_Box}": [
                ["style", "top", '-93px'],
                ["transform", "scaleY", '0'],
                ["style", "height", '257px'],
                ["transform", "scaleX", '0'],
                ["style", "left", '1106px'],
                ["style", "width", '577px']
            ],
            "${_chocolate_cake_photo}": [
                ["style", "top", '-527px'],
                ["transform", "scaleY", '0'],
                ["style", "height", '517px'],
                ["transform", "scaleX", '0'],
                ["style", "left", '954px'],
                ["style", "width", '517px']
            ],
            "${symbolSelector}": [
                ["style", "height", '305px'],
                ["style", "width", '305px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 244093,
            autoPlay: true,
            labels: {
                "a": 0,
                "b": 56620,
                "c": 150000
            },
            timeline: [
                { id: "eid43965", tween: [ "transform", "${_Teks_Box}", "scaleY", '1', { fromValue: '0'}], position: 150224, duration: 643, easing: "easeOutBack" },
                { id: "eid43964", tween: [ "transform", "${_Teks_Box}", "scaleX", '1', { fromValue: '0'}], position: 150224, duration: 643, easing: "easeOutBack" },
                { id: "eid43672", tween: [ "style", "${_chocolate_cake_photo}", "height", '517px', { fromValue: '517px'}], position: 150779, duration: 0, easing: "easeOutBack" },
                { id: "eid43675", tween: [ "style", "${_chocolate_cake_photo}", "left", '954px', { fromValue: '954px'}], position: 150779, duration: 0, easing: "easeOutBack" },
                { id: "eid43674", tween: [ "style", "${_chocolate_cake_photo}", "top", '-527px', { fromValue: '-527px'}], position: 150779, duration: 0, easing: "easeOutBack" },
                { id: "eid42986", tween: [ "transform", "${_chocolate_cake_photo}", "scaleX", '1', { fromValue: '0'}], position: 150136, duration: 643, easing: "easeOutBack" },
                { id: "eid43673", tween: [ "style", "${_chocolate_cake_photo}", "width", '517px', { fromValue: '517px'}], position: 150779, duration: 0, easing: "easeOutBack" },
                { id: "eid42987", tween: [ "transform", "${_chocolate_cake_photo}", "scaleY", '1', { fromValue: '0'}], position: 150136, duration: 643, easing: "easeOutBack" }            ]
        }
    }
},
"icon_outro2": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    rect: ['0px', '0px', '305px', '305px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    type: 'ellipse',
                    id: 'Ellipse',
                    opacity: 0.28455284552846,
                    cursor: ['pointer'],
                    fill: ['rgba(253,246,139,1.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Ellipse}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(253,246,139,1.00)'],
                ["style", "cursor", 'pointer'],
                ["style", "height", '305px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "width", '305px']
            ],
            "${symbolSelector}": [
                ["style", "height", '305px'],
                ["style", "width", '305px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 244093,
            autoPlay: true,
            labels: {
                "a": 0,
                "b": 56620,
                "c": 150000
            },
            timeline: [
                { id: "eid42718", tween: [ "style", "${_Ellipse}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
                { id: "eid42725", tween: [ "style", "${_Ellipse}", "opacity", '0.2', { fromValue: '0'}], position: 56620, duration: 0 },
                { id: "eid42726", tween: [ "style", "${_Ellipse}", "opacity", '0.4', { fromValue: '0.2'}], position: 150000, duration: 0 }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-5611080");
