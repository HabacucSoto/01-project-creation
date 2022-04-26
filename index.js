const MissionCommander = require( './app/missionCommander' );

const mcs = [ '@carlogilmar', '@romarpla', '@FernandaOchoa' ]

mcs.forEach( mc => {
    const { user } = new MissionCommander( mc )
    console.log( user )
} )
