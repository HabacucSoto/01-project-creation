const MissionCommander = require( './../app/missionCommander' );

describe( 'class testing', () => {
    test( '1) Create a mc object', () => {
        const { user } = new MissionCommander( '@carlogilmar' )
        expect( user ).toBe( '@carlogilmar' );
    } )
} )