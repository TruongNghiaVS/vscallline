

const axios = require('axios');
const Response = require('../helpers/Response')
var ami = new require('asterisk-manager')('5038','127.0.0.1','admin','zAWc3uQ0WbGD', true);

// In case of any connectiviy problems we got you coverd.
ami.keepConnected();


 ami.on('managerevent', function(evt) {

  // if(evt.event = "Cdr"
  // )
  // {
  //   console.log(evt);
  // }
// console.log(evt);
  // if( evt.source =="9005"
  // )
  // {
  //   console.log(evt);
  // }

});

// Listen for specific AMI events. A list of event names can be found at
// https://wiki.asterisk.org/wiki/display/AST/Asterisk+11+AMI+Events
ami.on('hangup', function(evt) {

  if(evt.connectedlinenum =="9000")
  { 
    console.log(evt);
   
  }
  

});

ami.on('confbridgejoin', function(evt) {

  
});

// Listen for Action responses.
ami.on('response', function(evt) {});


var self =module.exports = {
  TriggerCallClient: async (phoneNumber, chanel)=>
  {
      ami.action({
            'action':'Originate',
            "channel": "PJSIP/"+ chanel,
            "context": "from-internal",
            "exten": phoneNumber,
            "async": true,
            "callerID ": chanel,
            "priority": "1"
      }, 
      function(err, res) {
            if(err)
            {
              console.log(err);
            }
            if(res.response == "Success")
            {
                    return {
                        success: true, 
                        message: "Đã connect và khởi tạo thành công"
                      }
            }
            else 
            {
                    return {
                      success: false, 
                      message: "Connect thát bại"
                    }
            }
        
  
  
      });
  
  },
  TriggerCall: async (req, res) => {
    const  {phoneNumber, lineCode, NoAgrree} = req.body;
      try { 
            let reponse =await self.TriggerCallClient(phoneNumber,lineCode);
            res.send(Response(200, "Thành công",reponse, true,0));
      } catch (err) {
            console.log(err);
            res.send(Response(202, JSON.stringify(err), err, false));
      }
  }

}