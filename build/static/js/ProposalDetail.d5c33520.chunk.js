(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{3471:function(e,a,t){"use strict";t.r(a);var l=t(2),s=t.n(l),r=t(6),n=t(16),o=t(15),p=t(21),c=t(20),m=t(0),i=t.n(m),d=t(3),u=t(18),E=t(13),g=t(90),_=t(23),v=t(265),b=t(4),f=t(63),N=t(25),y=function(e){Object(p.a)(l,e);var a,t=Object(c.a)(l);function l(){var e;return Object(n.a)(this,l),(e=t.call(this)).state={loading:!1},e}return Object(o.a)(l,[{key:"componentDidMount",value:function(){var e=this.props.match;this.load(e.params.id)}},{key:"load",value:(a=Object(r.a)(s.a.mark(function e(a){var t,l,r,n,o,p,c,m;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({loading:!0}),e.next=3,u.b.getProposalById(a);case 3:if(t=e.sent,l=t.data,r=l,n=["getMaintenanceTimeInterval","getAccountUpgradeCost","getCreateAccountFee","getTransactionFee","getAssetIssueFee","getWitnessPayPerBlock","getWitnessStandbyAllowance","getCreateNewAccountFeeInSystemContract","getCreateNewAccountBandwidthRate","getAllowCreationOfContracts","getRemoveThePowerOfTheGr","getEnergyFee","getExchangeCreateFee","getMaxCpuTimeOfOneTx","getAllowUpdateAccountName","getAllowSameTokenName","getAllowDelegateResource","getTotalEnergyLimit","getAllowTvmTransferTrc10","getTotalEnergyLimitNew","getAllowMultiSign","getAllowAdaptiveEnergy","getUpdateAccountPermissionFee","getMultiSignFee","getAllowProtoFilterNum","","getAllowTvmConstantinople","getAllowShieldedTransaction","getShieldedTransactionFee","getAdaptiveResourceLimitMultiplier","getChangeDelegation","getWitness127PayPerBlock","getAllowTvmSolidity059","getAdaptiveResourceLimitTargetRatio","getShieldedTransactionCreateAccountFee","getForbidTransferToContract"],o=[{id:"1000000",key:"getChargingSwitch"},{id:"1000001",key:"getSideChainGateWayList"},{id:"1000003",key:"getProposalExpireTime"},{id:"1000004",key:"getVoteWitnessSwitch"},{id:"1000007",key:"getFundInjectAddress"},{id:"1000008",key:"getFundDistributeEnableSwitch"},{id:"1000009",key:"getDayToSustainByFund"},{id:"1000010",key:"getPercentToPayWitness"},{id:"1000012",key:"getUpdateGateway_v1_0_2"}],b.B)for(p in r.paramters)r.paramters[p].proposalKey=n[r.paramters[p].key],r.paramters[p].proposalVal=r.paramters[p].value;else for(c in r.paramters)for(m in o)o[m].id==r.paramters[c].key&&(r.paramters[c].proposalKey=o[m].key,r.paramters[c].proposalVal=r.paramters[c].value);this.setState({proposal:r,loading:!1});case 10:case"end":return e.stop()}},e,this)})),function(e){return a.apply(this,arguments)})},{key:"render",value:function(){var e=this.props,a=e.match,t=e.intl,l=this.state,s=l.proposal,r=l.loading;return i.a.createElement("main",{className:"container header-overlap proposal-detail"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-md-12 "},r?i.a.createElement("div",{className:"card"},i.a.createElement(g.b,null,Object(d.c)("loading_address")," #",a.params.id)):i.a.createElement(m.Fragment,null,i.a.createElement("div",{className:"card list-style-header"},a.params.id&&i.a.createElement("div",{className:"card-body"},i.a.createElement("h5",{className:"card-title m-0"},"# ",a.params.id,"\xa0",Object(d.b)("proposal"))),i.a.createElement("div",{className:"proposal-header"},s&&i.a.createElement("div",{className:""},i.a.createElement("div",{className:"header-item"},i.a.createElement("div",{className:"d-flex"},i.a.createElement("div",{className:"item-title"},Object(d.b)("proposer")," :"),i.a.createElement("div",{className:"item-info"},s.proposer.name?i.a.createElement(_.a,{address:s.proposer.address},s.proposer.name):i.a.createElement(_.a,{address:s.proposer.address},s.proposer.address))),i.a.createElement("div",{className:"d-flex"},i.a.createElement("div",{className:"item-title"},Object(d.b)("proposal_time_of_creation"),":"),i.a.createElement("div",{className:"item-info"},i.a.createElement(E.a,{value:Number(s.createTime)}),"\xa0",i.a.createElement(E.e,{value:Number(s.createTime),hour:"numeric",minute:"numeric",second:"numeric",hour12:!1}),"\xa0"))),i.a.createElement("div",{className:"header-item"},i.a.createElement("div",{className:"d-flex"},i.a.createElement("div",{className:"item-title"},Object(d.b)("proposal_content_info")," :"),i.a.createElement("div",{className:"item-info"},s&&s.paramters.map(function(e,a){return i.a.createElement("div",{key:a},b.B?i.a.createElement("div",null,"getMaintenanceTimeInterval"==e.proposalKey&&i.a.createElement("div",{className:"proposal-message"},i.a.createElement("span",null,t.formatMessage({id:"propose_1"})),i.a.createElement("span",null,t.formatMessage({id:"proposal_to"})),i.a.createElement("span",{className:"col-green"},e.proposalVal/36e5)," \xa0",i.a.createElement("span",null,t.formatMessage({id:"propose_hour"}))),"getAccountUpgradeCost"==e.proposalKey&&i.a.createElement("div",{className:"proposal-message"},i.a.createElement("span",null,t.formatMessage({id:"propose_2"})),i.a.createElement("span",null,t.formatMessage({id:"proposal_to"})),i.a.createElement("span",{className:"col-green"},e.proposalVal/b.K)," \xa0",i.a.createElement("span",null,"TRX")),"getCreateAccountFee"==e.proposalKey&&i.a.createElement("div",{className:"proposal-message"},i.a.createElement("span",null,t.formatMessage({id:"propose_3"})),i.a.createElement("span",null,t.formatMessage({id:"proposal_to"})),i.a.createElement("span",{className:"col-green"},e.proposalVal/b.K)," \xa0",i.a.createElement("span",null,"TRX")),"getTransactionFee"==e.proposalKey&&i.a.createElement("div",{className:"proposal-message"},i.a.createElement("span",null,t.formatMessage({id:"propose_4"})),i.a.createElement("span",null,t.formatMessage({id:"proposal_to"})),i.a.createElement("span",{className:"col-green"},e.proposalVal)," \xa0",i.a.createElement("span",null,"Sun/byte")),"getAssetIssueFee"==e.proposalKey&&i.a.createElement("div",{className:"proposal-message"},i.a.createElement("span",null,t.formatMessage({id:"propose_5"})),i.a.createElement("span",null,t.formatMessage({id:"proposal_to"})),i.a.createElement("span",{className:"col-green"},e.proposalVal/b.K)," \xa0",i.a.createElement("span",null,"TRX")),"getWitnessPayPerBlock"==e.proposalKey&&i.a.createElement("div",null,i.a.createElement("div",{className:"proposal-message"},i.a.createElement("span",null,t.formatMessage({id:"propose_6"})),i.a.createElement("span",null,t.formatMessage({id:"proposal_to"})),i.a.createElement("span",{className:"col-green"},e.proposalVal/b.K)," \xa0",i.a.createElement("span",null,"TRX"))),"getWitnessStandbyAllowance"==e.proposalKey&&i.a.createElement("div",{className:"proposal-message"},i.a.createElement("span",null,t.formatMessage({id:"propose_7"})),i.a.createElement("span",null,t.formatMessage({id:"proposal_to"})),i.a.createElement("span",{className:"col-green"},e.proposalVal/b.K)," \xa0",i.a.createElement("span",null,"TRX")),"getCreateNewAccountFeeInSystemContract"==e.proposalKey&&i.a.createElement("div",{className:"proposal-message"},i.a.createElement("span",null,t.formatMessage({id:"propose_8"})),i.a.createElement("span",null,t.formatMessage({id:"proposal_to"})),i.a.createElement("span",{className:"col-green"},e.proposalVal/b.K)," \xa0",i.a.createElement("span",null,"TRX")),"getCreateNewAccountBandwidthRate"==e.proposalKey&&i.a.createElement("div",{className:"proposal-message"},i.a.createElement("span",null,t.formatMessage({id:"propose_9"})),i.a.createElement("span",null,t.formatMessage({id:"proposal_to"})),i.a.createElement("span",{className:"col-green"},e.proposalVal)," \xa0",i.a.createElement("span",null,"bandwith/byte")),"getAllowCreationOfContracts"==e.proposalKey&&i.a.createElement("div",{className:"proposal-message"},i.a.createElement("span",null,t.formatMessage({id:"propose_10"})),i.a.createElement("span",{className:"col-green"},Object(d.c)("propose_activate"))),"getRemoveThePowerOfTheGr"==e.proposalKey&&i.a.createElement("div",{className:"proposal-message"},i.a.createElement("span",null,t.formatMessage({id:"propose_11"}))),"getEnergyFee"==e.proposalKey&&i.a.createElement("div",{className:"proposal-message"},i.a.createElement("span",null,t.formatMessage({id:"propose_12"})),i.a.createElement("span",null,t.formatMessage({id:"proposal_to"})),i.a.createElement("span",{className:"col-green"},e.proposalVal/b.K," TRX")),"getExchangeCreateFee"==e.proposalKey&&i.a.createElement("div",{className:"proposal-message"},i.a.createElement("span",null,t.formatMessage({id:"propose_13"})),i.a.createElement("span",null,t.formatMessage({id:"proposal_to"})),i.a.createElement("span",{className:"col-green"},e.proposalVal/b.K," TRX")),"getMaxCpuTimeOfOneTx"==e.proposalKey&&i.a.createElement("div",{className:"proposal-message"},i.a.createElement("span",null,t.formatMessage({id:"propose_14"})),i.a.createElement("span",null,t.formatMessage({id:"proposal_to"})),i.a.createElement("span",{className:"col-green"},e.proposalVal," ms")),"getAllowUpdateAccountName"==e.proposalKey&&i.a.createElement("div",{className:"proposal-message"},i.a.createElement("span",null,t.formatMessage({id:"propose_15"})),i.a.createElement("span",null,t.formatMessage({id:"proposal_to"})),e.proposalVal?i.a.createElement("span",{className:"col-green"},Object(d.c)("propose_allowed")):i.a.createElement("span",{className:"col-green"},Object(d.c)("propose_not_allowed"))),"getAllowSameTokenName"==e.proposalKey&&i.a.createElement("div",{className:"proposal-message"},i.a.createElement("span",null,t.formatMessage({id:"propose_16"})),i.a.createElement("span",null,t.formatMessage({id:"proposal_to"})),e.proposalVal?i.a.createElement("span",{className:"col-green"},Object(d.c)("propose_allowed")):i.a.createElement("span",{className:"col-green"},Object(d.c)("propose_not_allowed"))),"getAllowDelegateResource"==e.proposalKey&&i.a.createElement("div",{className:"proposal-message"},i.a.createElement("span",null,t.formatMessage({id:"propose_17"})),i.a.createElement("span",null,t.formatMessage({id:"proposal_to"})),e.proposalVal?i.a.createElement("span",{className:"col-green"},Object(d.c)("propose_allowed")):i.a.createElement("span",{className:"col-green"},Object(d.c)("propose_not_allowed"))),"getTotalEnergyLimit"==e.proposalKey&&i.a.createElement("div",{className:"proposal-message"},i.a.createElement("span",null,t.formatMessage({id:"propose_18"})),i.a.createElement("span",null,t.formatMessage({id:"proposal_to"})),i.a.createElement("span",{className:"col-green"},e.proposalVal)),"getAllowTvmTransferTrc10"==e.proposalKey&&i.a.createElement("div",{className:"proposal-message"},i.a.createElement("span",null,t.formatMessage({id:"propose_19"})),i.a.createElement("span",null,t.formatMessage({id:"proposal_to"})),e.proposalVal?i.a.createElement("span",{className:"col-green"},Object(d.c)("propose_allowed")):i.a.createElement("span",{className:"col-green"},Object(d.c)("propose_not_allowed"))),"getTotalEnergyLimitNew"==e.proposalKey&&i.a.createElement("div",{className:"proposal-message"},i.a.createElement("span",null,t.formatMessage({id:"propose_18_1"})),i.a.createElement("span",null,t.formatMessage({id:"proposal_to"})),i.a.createElement("span",{className:"col-green"},e.proposalVal)),"getTotalEnergyCurrentLimit"==e.proposalKey&&i.a.createElement("div",null,i.a.createElement("span",null,t.formatMessage({id:"propose_20"})),i.a.createElement("span",null,t.formatMessage({id:"proposal_to"})),i.a.createElement("span",null,e.proposalVal," ENERGY")),"getAllowMultiSign"==e.proposalKey&&i.a.createElement("div",null,i.a.createElement("span",null,t.formatMessage({id:"propose_21"})),i.a.createElement("span",null,t.formatMessage({id:"proposal_to"})),e.proposalVal?i.a.createElement("span",null,Object(d.c)("propose_allowed")):i.a.createElement("span",null,Object(d.c)("propose_not_allowed"))),"getAllowAdaptiveEnergy"==e.proposalKey&&i.a.createElement("div",null,i.a.createElement("span",null,t.formatMessage({id:"propose_22"})),i.a.createElement("span",null,t.formatMessage({id:"proposal_to"})),e.proposalVal?i.a.createElement("span",null,Object(d.c)("propose_allowed")):i.a.createElement("span",null,Object(d.c)("propose_not_allowed"))),"getTotalEnergyTargetLimit"==e.proposalKey&&i.a.createElement("div",null,i.a.createElement("span",null,t.formatMessage({id:"propose_23"})),i.a.createElement("span",null,t.formatMessage({id:"proposal_to"})),i.a.createElement("span",null,e.proposalVal),"/",i.a.createElement("span",null,Object(d.c)("propose_minute"))),"getTotalEnergyAverageUsage"==e.proposalKey&&i.a.createElement("div",null,i.a.createElement("span",null,t.formatMessage({id:"propose_24"})),i.a.createElement("span",null,t.formatMessage({id:"proposal_to"})),e.proposalVal?i.a.createElement("span",null,i.a.createElement("span",null,e.proposalVal),"/",i.a.createElement("span",null,Object(d.c)("propose_minute"))):i.a.createElement("span",null,Object(d.c)("propose_unactivate"))),"getUpdateAccountPermissionFee"==e.proposalKey&&i.a.createElement("div",null,i.a.createElement("span",null,t.formatMessage({id:"propose_25"})),i.a.createElement("span",null,t.formatMessage({id:"proposal_to"})),i.a.createElement("span",null,e.proposalVal/b.K)," \xa0",i.a.createElement("span",null,"TRX")),"getMultiSignFee"==e.proposalKey&&i.a.createElement("div",null,i.a.createElement("span",null,t.formatMessage({id:"propose_26"})),i.a.createElement("span",null,t.formatMessage({id:"proposal_to"})),i.a.createElement("span",null,e.proposalVal/b.K)," \xa0",i.a.createElement("span",null,"TRX")),"getAllowProtoFilterNum"==e.proposalKey&&i.a.createElement("div",null,i.a.createElement("span",null,t.formatMessage({id:"propose_27"})),i.a.createElement("span",null,t.formatMessage({id:"proposal_to"})),e.proposalVal?i.a.createElement("span",null,Object(d.c)("propose_activate")):i.a.createElement("span",null,Object(d.c)("propose_unactivate"))),"getAllowTvmConstantinople"==e.proposalKey&&i.a.createElement("div",null,i.a.createElement("span",null,t.formatMessage({id:"propose_28"})),i.a.createElement("span",null,t.formatMessage({id:"proposal_to"})),e.proposalVal?i.a.createElement("span",null,Object(d.c)("propose_allowed")):i.a.createElement("span",null,Object(d.c)("propose_not_allowed"))),"getAllowShieldedTransaction"==e.proposalKey&&i.a.createElement("div",null,i.a.createElement("span",null,t.formatMessage({id:"propose_29"})),i.a.createElement("span",null,t.formatMessage({id:"proposal_to"})),e.proposalVal?i.a.createElement("span",null,Object(d.c)("propose_allowed")):i.a.createElement("span",null,Object(d.c)("propose_not_allowed"))),"getShieldedTransactionFee"==e.proposalKey&&i.a.createElement("div",null,i.a.createElement("span",null,t.formatMessage({id:"propose_28_1"})),i.a.createElement("span",null,t.formatMessage({id:"proposal_to"})),i.a.createElement("span",null,e.proposalVal/b.K)," \xa0",i.a.createElement("span",null,"TRX")),"getAdaptiveResourceLimitMultiplier"==e.proposalKey&&i.a.createElement("div",null,i.a.createElement("span",null,t.formatMessage({id:"propose_29_1"})),i.a.createElement("span",null,t.formatMessage({id:"proposal_to"})),i.a.createElement("span",null,e.proposalVal)),"getChangeDelegation"==e.proposalKey&&i.a.createElement("div",null,i.a.createElement("span",null,t.formatMessage({id:"propose_30"})),i.a.createElement("span",null,t.formatMessage({id:"proposal_to"})),e.proposalVal?i.a.createElement("span",null,Object(d.c)("propose_activate")):i.a.createElement("span",null,Object(d.c)("propose_unactivate"))),"getWitness127PayPerBlock"==e.proposalKey&&i.a.createElement("div",{className:""},i.a.createElement("span",null,t.formatMessage({id:"propose_31"})),i.a.createElement("span",null,t.formatMessage({id:"proposal_to"})),i.a.createElement("span",null,e.proposalVal/b.K)," \xa0",i.a.createElement("span",null,"TRX")),"getAllowTvmSolidity059"==e.proposalKey&&i.a.createElement("div",null,i.a.createElement("span",null,t.formatMessage({id:"propose_32"})),i.a.createElement("span",null,t.formatMessage({id:"proposal_to"})),e.proposalVal?i.a.createElement("span",null,Object(d.c)("propose_allowed")):i.a.createElement("span",null,Object(d.c)("propose_not_allowed")),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("div",null,Object(d.c)("getAllowTvmSolidity059_tips"),i.a.createElement("a",{className:"ml-2",href:"https://github.com/tronprotocol/tips/blob/master/proposal/proposal-32.md",target:"_blank"},Object(d.c)("learn_more"),">")),i.a.createElement("div",null,"tronprotocol/tips:",i.a.createElement("a",{className:"ml-2",href:"https://github.com/tronprotocol/tips/blob/master/tip-43.md",target:"_blank"},Object(d.c)("#tip43")),i.a.createElement("a",{className:"ml-2",href:"https://github.com/tronprotocol/tips/blob/master/tip-44.md",target:"_blank"},Object(d.c)("#tip44")),i.a.createElement("a",{className:"ml-2",href:"https://github.com/tronprotocol/tips/blob/master/tip-54.md",target:"_blank"},Object(d.c)("#tip54")),i.a.createElement("a",{className:"ml-2",href:"https://github.com/tronprotocol/tips/blob/master/tip-60.md",target:"_blank"},Object(d.c)("#tip60")))),"getAdaptiveResourceLimitTargetRatio"==e.proposalKey&&i.a.createElement("div",null,i.a.createElement("span",null,t.formatMessage({id:"propose_33"})),i.a.createElement("span",null,t.formatMessage({id:"proposal_to"})),i.a.createElement("span",null,e.proposalVal)),"getShieldedTransactionCreateAccountFee"==e.proposalKey&&i.a.createElement("div",{className:"mt-1"},i.a.createElement("span",null,t.formatMessage({id:"propose_34"})),i.a.createElement("span",null,t.formatMessage({id:"proposal_to"})),i.a.createElement("span",null,e.proposalVal/b.K)," \xa0",i.a.createElement("span",null,"TRX")),"getForbidTransferToContract"==e.proposalKey&&i.a.createElement("div",null,i.a.createElement("span",null,t.formatMessage({id:"propose_35"})),i.a.createElement("span",null,t.formatMessage({id:"proposal_to"})),e.proposalVal?i.a.createElement("span",null,Object(d.c)("propose_prohibit")):i.a.createElement("span",null,Object(d.c)("propose_not_prohibit")))):i.a.createElement("div",null,"getChargingSwitch"==e.proposalKey&&i.a.createElement("div",null,i.a.createElement("span",null,t.formatMessage({id:"sun_propose_1"})),i.a.createElement("span",null,t.formatMessage({id:"proposal_to"})),"0"!=e.proposalVal?i.a.createElement("span",null,Object(d.c)("propose_activate")):i.a.createElement("span",null,Object(d.c)("propose_unactivate"))),"getSideChainGateWayList"==e.proposalKey&&i.a.createElement("div",null,i.a.createElement("span",null,t.formatMessage({id:"sun_propose_2"})),i.a.createElement("span",null,t.formatMessage({id:"proposal_to"})),i.a.createElement("span",null,e.proposalVal)),"getProposalExpireTime"==e.proposalKey&&i.a.createElement("div",null,i.a.createElement("span",null,t.formatMessage({id:"sun_propose_3"})),i.a.createElement("span",null,t.formatMessage({id:"proposal_to"})),i.a.createElement("span",null,e.proposalVal)),"getVoteWitnessSwitch"==e.proposalKey&&i.a.createElement("div",null,i.a.createElement("span",null,t.formatMessage({id:"sun_propose_4"})),i.a.createElement("span",null,t.formatMessage({id:"proposal_to"})),"0"!=e.proposalVal?i.a.createElement("span",null,Object(d.c)("propose_activate")):i.a.createElement("span",null,Object(d.c)("propose_unactivate"))),"getFundInjectAddress"==e.proposalKey&&i.a.createElement("div",null,i.a.createElement("span",null,t.formatMessage({id:"sun_propose_5"})),i.a.createElement("span",null,t.formatMessage({id:"proposal_to"})),i.a.createElement("span",null,e.proposalVal)),"getFundDistributeEnableSwitch"==e.proposalKey&&i.a.createElement("div",null,i.a.createElement("span",null,t.formatMessage({id:"sun_propose_6"})),i.a.createElement("span",null,t.formatMessage({id:"proposal_to"})),"0"!=e.proposalVal?i.a.createElement("span",null,Object(d.c)("propose_activate")):i.a.createElement("span",null,Object(d.c)("propose_unactivate"))),"getDayToSustainByFund"==e.proposalKey&&i.a.createElement("div",null,i.a.createElement("span",null,t.formatMessage({id:"sun_propose_7"})),i.a.createElement("span",null,t.formatMessage({id:"proposal_to"})),i.a.createElement("span",null,e.proposalVal," ",Object(d.c)("day"))),"getPercentToPayWitness"==e.proposalKey&&i.a.createElement("div",null,i.a.createElement("span",null,t.formatMessage({id:"sun_propose_8"})),i.a.createElement("span",null,t.formatMessage({id:"proposal_to"})),i.a.createElement("span",null,e.proposalVal," %")),"getUpdateGateway_v1_0_2"==e.proposalKey&&i.a.createElement("div",null,i.a.createElement("span",null,t.formatMessage({id:"sun_propose_12"})),i.a.createElement("span",null,t.formatMessage({id:"proposal_to"})),e.proposalVal?i.a.createElement("span",null,Object(d.c)("propose_allowed")):i.a.createElement("span",null,Object(d.c)("propose_not_allowed")))))}))),i.a.createElement("div",{className:"d-flex"},i.a.createElement("div",{className:"item-title"},Object(d.b)("proposal_time_of_expire"),":"),i.a.createElement("div",{className:"item-info"},i.a.createElement(E.a,{value:Number(s.expirationTime)}),"\xa0",i.a.createElement(E.e,{value:Number(s.expirationTime),hour:"numeric",minute:"numeric",second:"numeric",hour12:!1}),"\xa0"))),i.a.createElement("div",{className:"header-item"},i.a.createElement("div",{className:"d-flex"},i.a.createElement("div",{className:"item-title"},Object(d.b)("proposal_status")," :"),i.a.createElement("div",{className:"item-info"},"PENDING"==s.state&&i.a.createElement("div",null,i.a.createElement("span",{className:"badge badge-warning text-uppercase badge-success-radius"},Object(d.c)("proposal_voting"))),"DISAPPROVED"==s.state&&i.a.createElement("div",null,i.a.createElement("span",{className:"badge badge-danger text-uppercase badge-success-radius"},Object(d.c)("proposal_ineffective"))),"APPROVED"==s.state&&i.a.createElement("div",null,i.a.createElement("span",{className:"badge badge-success text-uppercase badge-success-radius"},Object(d.c)("proposal_effective"))),"CANCELED"==s.state&&i.a.createElement("div",null,i.a.createElement("span",{className:"badge badge-secondary text-uppercase badge-success-radius"},Object(d.c)("proposal_cancelled"))))))))),b.B&&s&&i.a.createElement("div",{className:"proposal-detail-wrap"},i.a.createElement("div",{className:"detail-header"},i.a.createElement("h2",null,Object(d.b)("proposal_details")),i.a.createElement("div",{className:"votes"},i.a.createElement("span",null,Object(d.b)("proposal_valid_votes"),": ",s.validVotes,";",Object(d.b)("proposal_total_votes"),": ",s.totalVotes),i.a.createElement("span",{className:"ml-2"},i.a.createElement(v.a,{placement:"top",text:"proposal_votes_tip"})))),i.a.createElement("div",{className:"detail-content"},s.typeApprovals&&0<s.typeApprovals.sr.length&&i.a.createElement("div",{className:"detail-item blue"},i.a.createElement("div",{className:"detail-item-title "},i.a.createElement("i",null),Object(d.c)("proposal_super_votes")," : ",s.typeApprovals.sr.length),i.a.createElement("div",{className:"detail-item-content"},s.typeApprovals.sr.map(function(e,a){return i.a.createElement(f.a,{to:"/address/".concat(e.address),key:a},e.name||M(e.address))}))),s.typeApprovals&&0<s.typeApprovals.partner.length&&i.a.createElement("div",{className:"detail-item orange"},i.a.createElement("div",{className:"detail-item-title "},i.a.createElement("i",null),Object(d.c)("proposal_super_partner_votes")," : ",s.typeApprovals.partner.length),i.a.createElement("div",{className:"detail-item-content"},s.typeApprovals.partner.map(function(e,a){return i.a.createElement(f.a,{to:"/address/".concat(e.address),key:a},e.name||M(e.address))}))),s.typeApprovals&&0<s.typeApprovals.candidate.length&&i.a.createElement("div",{className:"detail-item green"},i.a.createElement("div",{className:"detail-item-title "},i.a.createElement("i",null),Object(d.c)("proposal_super_candidate_votes")," : ",s.typeApprovals.candidate.length),i.a.createElement("div",{className:"detail-item-content"},s.typeApprovals.candidate.map(function(e,a){return i.a.createElement(f.a,{to:"/address/".concat(e.address),key:a},e.name||M(e.address))}))))),!b.B&&s&&i.a.createElement("div",{className:"proposal-detail-wrap"},i.a.createElement("div",{className:"detail-header"},i.a.createElement("h2",null,Object(d.b)("proposal_details")),i.a.createElement("div",{className:"votes"},i.a.createElement("span",null,Object(d.b)("proposal_total_votes"),": ",s.approvals.length))),i.a.createElement("div",{className:"detail-content"},s.approvals&&0<s.approvals.length&&i.a.createElement("div",{className:"detail-item blue"},i.a.createElement("div",{className:"detail-item-title "},i.a.createElement("i",null),Object(d.c)("proposal_super_votes")," : ",s.approvals.length),i.a.createElement("div",{className:"detail-item-content"},s.approvals.map(function(e,a){return i.a.createElement(f.a,{to:"/address/".concat(e.address),key:a},e.name||M(e.address))})))))))))}}]),l}(i.a.Component);function M(e){var a=e&&Object(N.isAddressValid)(e)?e.substring(0,29):"",t=e&&Object(N.isAddressValid)(e)?e.substring(29,34):"";return i.a.createElement("div",{className:"ellipsis_box"},i.a.createElement("div",{className:"ellipsis_box_start"},a),i.a.createElement("div",{className:"ellipsis_box_end"},t))}a.default=Object(E.h)(y)}}]);