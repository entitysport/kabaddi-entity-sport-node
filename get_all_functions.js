'use strict'

module.exports = function (api) {
  return {

    update_token(access_key,secret_key, callback) {
      return api.update({
        url: `auth`,
        data: {access_key:access_key,secret_key:secret_key}
      }, callback)
    },

    get_competitions_data(cid=0,args={}, callback) {
        if(cid){
          var path = 'competition/'+cid+'/info';
        }else{
          var path = 'competitions';
        }
        return api.get({
            url: path,
            data: args,
        }, callback)
    },

    get_competition_matches(cid,args={}, callback) {
      let path = 'competition/'+cid+'/matches';
      return api.get({
          url: path,
          data: args,
      }, callback)
    },

    get_competition_statstic(cid,args={}, callback) {
      let path = 'competition/'+cid+'/stats';
      return api.get({
          url: path,
          data: args,
      }, callback)
    },

    get_matches_data(mid=0,args={}, callback) {
      if(mid){
        var path = 'matches/'+mid+'/info';
      }else{
        var path = 'matches';
      }
      return api.get({
          url: path,
          data: args,
      }, callback)
    },

    get_matches_stats(mid,args={}, callback) {
      let path = 'matches/'+mid+'/stats';
      return api.get({
          url: path,
          data: args,
      }, callback)
    },

    get_teams_data(tid=0,args={}, callback) {
      if(tid){
        var path = 'team/'+tid+'/info';
      }else{
        var path = 'teams';
      }
      return api.get({
          url: path,
          data: args,
      }, callback)
    },

    get_teams_maches(tid,args={}, callback) {
      let path = 'team/'+tid+'/matches';
      return api.get({
          url: path,
          data: args,
      }, callback)
    },

    get_players_data(pid=0,args={}, callback) {
      if(pid){
        var path = 'player/'+pid+'/profile';
      }else{
        var path = 'players';
      }
      return api.get({
          url: path,
          data: args,
      }, callback)
    },

  }
}
