var http = require('http');
var Q = require('q');

//this function will call the team list
//typeof pagenum = int
function getTeamList(pagenum){
	var deffered = Q.defer();

	var options = {
		host: 'www.thebluealliance.com',
		path: '/api/v2/teams/' + pagenum + '?X-TBA-App-Id=personal:scouting:v01'
	};

	callback = function(response) {
    var str = '';

    //some comment here
    response.on('data', function(chunk) {
      str += chunk;
    });

    response.on('end', function() {
      var pageList = JSON.parse(str);
      deffered.resolve(pageList);

    });
  };

  http.request(options, callback).end();
  return deffered.promise;
}

//given json containing all the teams, break it down
function parseList(teamList){
	var teamsObject = Q.defer();
	var teamInfo = [];
	for(var index in teamList){
		var teamObject = {};
		var team = teamList[index];
		//console.log(team.nickname);
		teamObject.number = team.team_number;
		teamObject.name = team.nickname;
		teamObject.location = team.location;
		teamObject.website = team.website;
		if(teamObject.location !== null){
			teamInfo.push(teamObject);
		}
	}
	teamsObject.resolve(teamInfo);
	return teamsObject.promise;
}

var promise = getTeamList(1);

promise
.then(function(teamList){
	return parseList(teamList);
})
.then(function(teamsObject){
	console.log(teamsObject);
});


