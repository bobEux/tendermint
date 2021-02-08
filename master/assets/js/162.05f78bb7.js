(window.webpackJsonp=window.webpackJsonp||[]).push([[162],{736:function(e,t,o){"use strict";o.r(t);var a=o(1),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"validator-signing"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#validator-signing"}},[e._v("#")]),e._v(" Validator Signing")]),e._v(" "),o("p",[e._v("Here we specify the rules for validating a proposal and vote before signing.\nFirst we include some general notes on validating data structures common to both types.\nWe then provide specific validation rules for each. Finally, we include validation rules to prevent double-sigining.")]),e._v(" "),o("h2",{attrs:{id:"signedmsgtype"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#signedmsgtype"}},[e._v("#")]),e._v(" SignedMsgType")]),e._v(" "),o("p",[e._v("The "),o("code",[e._v("SignedMsgType")]),e._v(" is a single byte that refers to the type of the message\nbeing signed. It is defined in Go as follows:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gU2lnbmVkTXNnVHlwZSBpcyBhIHR5cGUgb2Ygc2lnbmVkIG1lc3NhZ2UgaW4gdGhlIGNvbnNlbnN1cy4KdHlwZSBTaWduZWRNc2dUeXBlIGJ5dGUKCmNvbnN0ICgKIC8vIFZvdGVzCiBQcmV2b3RlVHlwZSAgIFNpZ25lZE1zZ1R5cGUgPSAweDAxCiBQcmVjb21taXRUeXBlIFNpZ25lZE1zZ1R5cGUgPSAweDAyCgogLy8gUHJvcG9zYWxzCiBQcm9wb3NhbFR5cGUgU2lnbmVkTXNnVHlwZSA9IDB4MjAKKQo="}}),e._v(" "),o("p",[e._v("All signed messages must correspond to one of these types.")]),e._v(" "),o("h2",{attrs:{id:"timestamp"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#timestamp"}},[e._v("#")]),e._v(" Timestamp")]),e._v(" "),o("p",[e._v("Timestamp validation is subtle and there are currently no bounds placed on the\ntimestamp included in a proposal or vote. It is expected that validators will honestly\nreport their local clock time. The median of all timestamps\nincluded in a commit is used as the timestamp for the next block height.")]),e._v(" "),o("p",[e._v("Timestamps are expected to be strictly monotonic for a given validator, though\nthis is not currently enforced.")]),e._v(" "),o("h2",{attrs:{id:"chainid"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#chainid"}},[e._v("#")]),e._v(" ChainID")]),e._v(" "),o("p",[e._v("ChainID is an unstructured string with a max length of 50-bytes.\nIn the future, the ChainID may become structured, and may take on longer lengths.\nFor now, it is recommended that signers be configured for a particular ChainID,\nand to only sign votes and proposals corresponding to that ChainID.")]),e._v(" "),o("h2",{attrs:{id:"blockid"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#blockid"}},[e._v("#")]),e._v(" BlockID")]),e._v(" "),o("p",[e._v("BlockID is the structure used to represent the block:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBCbG9ja0lEIHN0cnVjdCB7CiBIYXNoICAgICAgICBbXWJ5dGUKIFBhcnRzSGVhZGVyIFBhcnRTZXRIZWFkZXIKfQoKdHlwZSBQYXJ0U2V0SGVhZGVyIHN0cnVjdCB7CiBIYXNoICBbXWJ5dGUKIFRvdGFsIGludAp9Cg=="}}),e._v(" "),o("p",[e._v("To be included in a valid vote or proposal, BlockID must either represent a "),o("code",[e._v("nil")]),e._v(" block, or a complete one.\nWe introduce two methods, "),o("code",[e._v("BlockID.IsZero()")]),e._v(" and "),o("code",[e._v("BlockID.IsComplete()")]),e._v(" for these cases, respectively.")]),e._v(" "),o("p",[o("code",[e._v("BlockID.IsZero()")]),e._v(" returns true for BlockID "),o("code",[e._v("b")]),e._v(" if each of the following\nare true:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Yi5IYXNoID09IG5pbApiLlBhcnRzSGVhZGVyLlRvdGFsID09IDAKYi5QYXJ0c0hlYWRlci5IYXNoID09IG5pbAo="}}),e._v(" "),o("p",[o("code",[e._v("BlockID.IsComplete()")]),e._v(" returns true for BlockID "),o("code",[e._v("b")]),e._v(" if each of the following\nare true:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"bGVuKGIuSGFzaCkgPT0gMzIKYi5QYXJ0c0hlYWRlci5Ub3RhbCAmZ3Q7IDAKbGVuKGIuUGFydHNIZWFkZXIuSGFzaCkgPT0gMzIK"}}),e._v(" "),o("h2",{attrs:{id:"proposals"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#proposals"}},[e._v("#")]),e._v(" Proposals")]),e._v(" "),o("p",[e._v("The structure of a proposal for signing looks like:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBDYW5vbmljYWxQcm9wb3NhbCBzdHJ1Y3QgewogVHlwZSAgICAgIFNpZ25lZE1zZ1R5cGUgLy8gdHlwZSBhbGlhcyBmb3IgYnl0ZQogSGVpZ2h0ICAgIGludDY0ICAgICAgICAgYGJpbmFyeTomcXVvdDtmaXhlZDY0JnF1b3Q7YAogUm91bmQgICAgIGludDY0ICAgICAgICAgYGJpbmFyeTomcXVvdDtmaXhlZDY0JnF1b3Q7YAogUE9MUm91bmQgIGludDY0ICAgICAgICAgYGJpbmFyeTomcXVvdDtmaXhlZDY0JnF1b3Q7YAogQmxvY2tJRCAgIEJsb2NrSUQKIFRpbWVzdGFtcCB0aW1lLlRpbWUKIENoYWluSUQgICBzdHJpbmcKfQo="}}),e._v(" "),o("p",[e._v("A proposal is valid if each of the following lines evaluates to true for proposal "),o("code",[e._v("p")]),e._v(":")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"cC5UeXBlID09IDB4MjAKcC5IZWlnaHQgJmd0OyAwCnAuUm91bmQgJmd0Oz0gMApwLlBPTFJvdW5kICZndDs9IC0xCnAuQmxvY2tJRC5Jc0NvbXBsZXRlKCkK"}}),e._v(" "),o("p",[e._v("In other words, a proposal is valid for signing if it contains the type of a Proposal\n(0x20), has a positive, non-zero height, a\nnon-negative round, a POLRound not less than -1, and a complete BlockID.")]),e._v(" "),o("h2",{attrs:{id:"votes"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#votes"}},[e._v("#")]),e._v(" Votes")]),e._v(" "),o("p",[e._v("The structure of a vote for signing looks like:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBDYW5vbmljYWxWb3RlIHN0cnVjdCB7CiBUeXBlICAgICAgU2lnbmVkTXNnVHlwZSAvLyB0eXBlIGFsaWFzIGZvciBieXRlCiBIZWlnaHQgICAgaW50NjQgICAgICAgICBgYmluYXJ5OiZxdW90O2ZpeGVkNjQmcXVvdDtgCiBSb3VuZCAgICAgaW50NjQgICAgICAgICBgYmluYXJ5OiZxdW90O2ZpeGVkNjQmcXVvdDtgCiBCbG9ja0lEICAgQmxvY2tJRAogVGltZXN0YW1wIHRpbWUuVGltZQogQ2hhaW5JRCAgIHN0cmluZwp9Cg=="}}),e._v(" "),o("p",[e._v("A vote is valid if each of the following lines evaluates to true for vote "),o("code",[e._v("v")]),e._v(":")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"di5UeXBlID09IDB4MSB8fCB2LlR5cGUgPT0gMHgyCnYuSGVpZ2h0ICZndDsgMAp2LlJvdW5kICZndDs9IDAKdi5CbG9ja0lELklzWmVybygpIHx8IHYuQmxvY2tJRC5Jc0NvbXBsZXRlKCkK"}}),e._v(" "),o("p",[e._v("In other words, a vote is valid for signing if it contains the type of a Prevote\nor Precommit (0x1 or 0x2, respectively), has a positive, non-zero height, a\nnon-negative round, and an empty or valid BlockID.")]),e._v(" "),o("h2",{attrs:{id:"invalid-votes-and-proposals"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#invalid-votes-and-proposals"}},[e._v("#")]),e._v(" Invalid Votes and Proposals")]),e._v(" "),o("p",[e._v("Votes and proposals which do not satisfy the above rules are considered invalid.\nPeers gossipping invalid votes and proposals may be disconnected from other peers on the network.\nNote, however, that there is not currently any explicit mechanism to punish validators signing votes or proposals that fail\nthese basic validation rules.")]),e._v(" "),o("h2",{attrs:{id:"double-signing"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#double-signing"}},[e._v("#")]),e._v(" Double Signing")]),e._v(" "),o("p",[e._v('Signers must be careful not to sign conflicting messages, also known as "double signing" or "equivocating".\nTendermint has mechanisms to publish evidence of validators that signed conflicting votes, so they can be punished\nby the application. Note Tendermint does not currently handle evidence of conflciting proposals, though it may in the future.')]),e._v(" "),o("h3",{attrs:{id:"state"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#state"}},[e._v("#")]),e._v(" State")]),e._v(" "),o("p",[e._v("To prevent such double signing, signers must track the height, round, and type of the last message signed.\nAssume the signer keeps the following state, "),o("code",[e._v("s")]),e._v(":")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBMYXN0U2lnbmVkIHN0cnVjdCB7CiBIZWlnaHQgaW50NjQKIFJvdW5kIGludDY0CiBUeXBlIFNpZ25lZE1zZ1R5cGUgLy8gYnl0ZQp9Cg=="}}),e._v(" "),o("p",[e._v("After signing a vote or proposal "),o("code",[e._v("m")]),e._v(", the signer sets:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"cy5IZWlnaHQgPSBtLkhlaWdodApzLlJvdW5kID0gbS5Sb3VuZApzLlR5cGUgPSBtLlR5cGUK"}}),e._v(" "),o("h3",{attrs:{id:"proposals-2"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#proposals-2"}},[e._v("#")]),e._v(" Proposals")]),e._v(" "),o("p",[e._v("A signer should only sign a proposal "),o("code",[e._v("p")]),e._v(" if any of the following lines are true:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"cC5IZWlnaHQgJmd0OyBzLkhlaWdodApwLkhlaWdodCA9PSBzLkhlaWdodCAmYW1wOyZhbXA7IHAuUm91bmQgJmd0OyBzLlJvdW5kCg=="}}),e._v(" "),o("p",[e._v("In other words, a proposal should only be signed if it's at a higher height, or a higher round for the same height.\nOnce a proposal or vote has been signed for a given height and round, a proposal should never be signed for the same height and round.")]),e._v(" "),o("h3",{attrs:{id:"votes-2"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#votes-2"}},[e._v("#")]),e._v(" Votes")]),e._v(" "),o("p",[e._v("A signer should only sign a vote "),o("code",[e._v("v")]),e._v(" if any of the following lines are true:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"di5IZWlnaHQgJmd0OyBzLkhlaWdodAp2LkhlaWdodCA9PSBzLkhlaWdodCAmYW1wOyZhbXA7IHYuUm91bmQgJmd0OyBzLlJvdW5kCnYuSGVpZ2h0ID09IHMuSGVpZ2h0ICZhbXA7JmFtcDsgdi5Sb3VuZCA9PSBzLlJvdW5kICZhbXA7JmFtcDsgdi5TdGVwID09IDB4MSAmYW1wOyZhbXA7IHMuU3RlcCA9PSAweDIwCnYuSGVpZ2h0ID09IHMuSGVpZ2h0ICZhbXA7JmFtcDsgdi5Sb3VuZCA9PSBzLlJvdW5kICZhbXA7JmFtcDsgdi5TdGVwID09IDB4MiAmYW1wOyZhbXA7IHMuU3RlcCAhPSAweDIK"}}),e._v(" "),o("p",[e._v("In other words, a vote should only be signed if it's:")]),e._v(" "),o("ul",[o("li",[e._v("at a higher height")]),e._v(" "),o("li",[e._v("at a higher round for the same height")]),e._v(" "),o("li",[e._v("a prevote for the same height and round where we haven't signed a prevote or precommit (but have signed a proposal)")]),e._v(" "),o("li",[e._v("a precommit for the same height and round where we haven't signed a precommit (but have signed a proposal and/or a prevote)")])]),e._v(" "),o("p",[e._v("This means that once a validator signs a prevote for a given height and round, the only other message it can sign for that height and round is a precommit.\nAnd once a validator signs a precommit for a given height and round, it must not sign any other message for that same height and round.")]),e._v(" "),o("p",[e._v("Note this includes votes for "),o("code",[e._v("nil")]),e._v(", ie. where "),o("code",[e._v("BlockID.IsZero()")]),e._v(" is true. If a\nsigner has already signed a vote where "),o("code",[e._v("BlockID.IsZero()")]),e._v(" is true, it cannot\nsign another vote with the same type for the same height and round where\n"),o("code",[e._v("BlockID.IsComplete()")]),e._v(" is true. Thus only a single vote of a particular type\n(ie. 0x01 or 0x02) can be signed for the same height and round.")]),e._v(" "),o("h3",{attrs:{id:"other-rules"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#other-rules"}},[e._v("#")]),e._v(" Other Rules")]),e._v(" "),o("p",[e._v('According to the rules of Tendermint consensus, once a validator precommits for\na block, they become "locked" on that block, which means they can\'t prevote for\nanother block unless they see sufficient justification (ie. a polka from a\nhigher round). For more details, see the '),o("a",{attrs:{href:"https://arxiv.org/abs/1807.04938",target:"_blank",rel:"noopener noreferrer"}},[e._v("consensus\nspec"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("p",[e._v('Violating this rule is known as "amnesia". In contrast to equivocation,\nwhich is easy to detect, amnesia is difficult to detect without access to votes\nfrom all the validators, as this is what constitutes the justification for\n"unlocking". Hence, amnesia is not punished within the protocol, and cannot\neasily be prevented by a signer. If enough validators simultaneously commit an\namnesia attack, they may cause a fork of the blockchain, at which point an\noff-chain protocol must be engaged to collect votes from all the validators and\ndetermine who misbehaved. For more details, see '),o("a",{attrs:{href:"https://github.com/tendermint/tendermint/pull/3978",target:"_blank",rel:"noopener noreferrer"}},[e._v("fork\ndetection"),o("OutboundLink")],1),e._v(".")])],1)}),[],!1,null,null,null);t.default=s.exports}}]);