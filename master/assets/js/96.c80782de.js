(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{790:function(e,t,n){"use strict";n.r(t);var o=n(1),a=Object(o.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"adr-025-commit"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#adr-025-commit"}},[e._v("#")]),e._v(" ADR 025 Commit")]),e._v(" "),n("h2",{attrs:{id:"context"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[e._v("#")]),e._v(" Context")]),e._v(" "),n("p",[e._v("Currently the "),n("code",[e._v("Commit")]),e._v(" structure contains a lot of potentially redundant or unnecessary data.\nIt contains a list of precommits from every validator, where the precommit\nincludes the whole "),n("code",[e._v("Vote")]),e._v(" structure. Thus each of the commit height, round,\ntype, and blockID are repeated for every validator, and could be deduplicated,\nleading to very significant savings in block size.")]),e._v(" "),n("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"dHlwZSBDb21taXQgc3RydWN0IHsKICAgIEJsb2NrSUQgICAgQmxvY2tJRCBganNvbjomcXVvdDtibG9ja19pZCZxdW90O2AKICAgIFByZWNvbW1pdHMgW10qVm90ZSBganNvbjomcXVvdDtwcmVjb21taXRzJnF1b3Q7YAp9Cgp0eXBlIFZvdGUgc3RydWN0IHsKICAgIFZhbGlkYXRvckFkZHJlc3MgQWRkcmVzcyAgIGBqc29uOiZxdW90O3ZhbGlkYXRvcl9hZGRyZXNzJnF1b3Q7YAogICAgVmFsaWRhdG9ySW5kZXggICBpbnQgICAgICAgYGpzb246JnF1b3Q7dmFsaWRhdG9yX2luZGV4JnF1b3Q7YAogICAgSGVpZ2h0ICAgICAgICAgICBpbnQ2NCAgICAgYGpzb246JnF1b3Q7aGVpZ2h0JnF1b3Q7YAogICAgUm91bmQgICAgICAgICAgICBpbnQgICAgICAgYGpzb246JnF1b3Q7cm91bmQmcXVvdDtgCiAgICBUaW1lc3RhbXAgICAgICAgIHRpbWUuVGltZSBganNvbjomcXVvdDt0aW1lc3RhbXAmcXVvdDtgCiAgICBUeXBlICAgICAgICAgICAgIGJ5dGUgICAgICBganNvbjomcXVvdDt0eXBlJnF1b3Q7YAogICAgQmxvY2tJRCAgICAgICAgICBCbG9ja0lEICAgYGpzb246JnF1b3Q7YmxvY2tfaWQmcXVvdDtgCiAgICBTaWduYXR1cmUgICAgICAgIFtdYnl0ZSAgICBganNvbjomcXVvdDtzaWduYXR1cmUmcXVvdDtgCn0K"}}),e._v(" "),n("p",[e._v("The original tracking issue for this is "),n("a",{attrs:{href:"https://github.com/tendermint/tendermint/issues/1648",target:"_blank",rel:"noopener noreferrer"}},[e._v("#1648"),n("OutboundLink")],1),e._v(".\nWe have discussed replacing the "),n("code",[e._v("Vote")]),e._v(" type in "),n("code",[e._v("Commit")]),e._v(" with a new "),n("code",[e._v("CommitSig")]),e._v("\ntype, which includes at minimum the vote signature. The "),n("code",[e._v("Vote")]),e._v(" type will\ncontinue to be used in the consensus reactor and elsewhere.")]),e._v(" "),n("p",[e._v("A primary question is what should be included in the "),n("code",[e._v("CommitSig")]),e._v(" beyond the\nsignature. One current constraint is that we must include a timestamp, since\nthis is how we calculuate BFT time, though we may be able to change this "),n("a",{attrs:{href:"https://github.com/tendermint/tendermint/issues/2840",target:"_blank",rel:"noopener noreferrer"}},[e._v("in the\nfuture"),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("p",[e._v("Other concerns here include:")]),e._v(" "),n("ul",[n("li",[e._v("Validator Address "),n("a",{attrs:{href:"https://github.com/tendermint/tendermint/issues/3596",target:"_blank",rel:"noopener noreferrer"}},[e._v("#3596"),n("OutboundLink")],1),e._v(" -\nShould the CommitSig include the validator address? It is very convenient to\ndo so, but likely not necessary. This was also discussed in "),n("a",{attrs:{href:"https://github.com/tendermint/tendermint/issues/2226",target:"_blank",rel:"noopener noreferrer"}},[e._v("#2226"),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("li",[e._v("Absent Votes "),n("a",{attrs:{href:"https://github.com/tendermint/tendermint/issues/3591",target:"_blank",rel:"noopener noreferrer"}},[e._v("#3591"),n("OutboundLink")],1),e._v(" -\nHow to represent absent votes? Currently they are just present as "),n("code",[e._v("nil")]),e._v(" in the\nPrecommits list, which is actually problematic for serialization")]),e._v(" "),n("li",[e._v("Other BlockIDs "),n("a",{attrs:{href:"https://github.com/tendermint/tendermint/issues/3485",target:"_blank",rel:"noopener noreferrer"}},[e._v("#3485"),n("OutboundLink")],1),e._v(" -\nHow to represent votes for nil and for other block IDs? We currently allow\nvotes for nil and votes for alternative block ids, but just ignore them")])]),e._v(" "),n("h2",{attrs:{id:"decision"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#decision"}},[e._v("#")]),e._v(" Decision")]),e._v(" "),n("p",[e._v("Deduplicate the fields and introduce "),n("code",[e._v("CommitSig")]),e._v(":")]),e._v(" "),n("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"dHlwZSBDb21taXQgc3RydWN0IHsKICAgIEhlaWdodCAgaW50NjQKICAgIFJvdW5kICAgaW50CiAgICBCbG9ja0lEICAgIEJsb2NrSUQgICAgICBganNvbjomcXVvdDtibG9ja19pZCZxdW90O2AKICAgIFByZWNvbW1pdHMgW11Db21taXRTaWcgYGpzb246JnF1b3Q7cHJlY29tbWl0cyZxdW90O2AKfQoKdHlwZSBDb21taXRTaWcgc3RydWN0IHsKICAgIEJsb2NrSUQgIEJsb2NrSURGbGFnCiAgICBWYWxpZGF0b3JBZGRyZXNzIEFkZHJlc3MKICAgIFRpbWVzdGFtcCB0aW1lLlRpbWUKICAgIFNpZ25hdHVyZSBbXWJ5dGUKfQoKCi8vIGluZGljYXRlIHdoaWNoIEJsb2NrSUQgdGhlIHNpZ25hdHVyZSBpcyBmb3IKdHlwZSBCbG9ja0lERmxhZyBpbnQKCmNvbnN0ICgKCUJsb2NrSURGbGFnQWJzZW50IEJsb2NrSURGbGFnID0gaW90YSAvLyB2b3RlIGlzIG5vdCBpbmNsdWRlZCBpbiB0aGUgQ29tbWl0LlByZWNvbW1pdHMKCUJsb2NrSURGbGFnQ29tbWl0ICAgICAgICAgICAgICAgICAgICAvLyB2b3RlZCBmb3IgdGhlIENvbW1pdC5CbG9ja0lECglCbG9ja0lERmxhZ05pbCAgICAgICAgICAgICAgICAgICAgICAgLy8gdm90ZWQgZm9yIG5pbAopCgo="}}),e._v(" "),n("p",[e._v("Re the concerns outlined in the context:")]),e._v(" "),n("p",[n("strong",[e._v("Timestamp")]),e._v(": Leave the timestamp for now. Removing it and switching to\nproposer based time will take more analysis and work, and will be left for a\nfuture breaking change. In the meantime, the concerns with the current approach to\nBFT time "),n("a",{attrs:{href:"https://github.com/tendermint/tendermint/issues/2840#issuecomment-529122431",target:"_blank",rel:"noopener noreferrer"}},[e._v("can be\nmitigated"),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("p",[n("strong",[e._v("ValidatorAddress")]),e._v(": we include it in the "),n("code",[e._v("CommitSig")]),e._v(" for now. While this\ndoes increase the block size unecessarily (20-bytes per validator), it has some ergonomic and debugging advantages:")]),e._v(" "),n("ul",[n("li",[n("code",[e._v("Commit")]),e._v(" contains everything necessary to reconstruct "),n("code",[e._v("[]Vote")]),e._v(", and doesn't depend on additional access to a "),n("code",[e._v("ValidatorSet")])]),e._v(" "),n("li",[e._v("Lite clients can check if they know the validators in a commit without\nre-downloading the validator set")]),e._v(" "),n("li",[e._v("Easy to see directly in a commit which validators signed what without having\nto fetch the validator set")])]),e._v(" "),n("p",[e._v("If and when we change the "),n("code",[e._v("CommitSig")]),e._v(" again, for instance to remove the timestamp,\nwe can reconsider whether the ValidatorAddress should be removed.")]),e._v(" "),n("p",[n("strong",[e._v("Absent Votes")]),e._v(": we include absent votes explicitly with no Signature or\nTimestamp but with the ValidatorAddress. This should resolve the serialization\nissues and make it easy to see which validator's votes failed to be included.")]),e._v(" "),n("p",[n("strong",[e._v("Other BlockIDs")]),e._v(": We use a single byte to indicate which blockID a "),n("code",[e._v("CommitSig")]),e._v("\nis for. The only options are:\n- "),n("code",[e._v("Absent")]),e._v(" - no vote received from the this validator, so no signature\n- "),n("code",[e._v("Nil")]),e._v(" - validator voted Nil - meaning they did not see a polka in time\n- "),n("code",[e._v("Commit")]),e._v(" - validator voted for this block")]),e._v(" "),n("p",[e._v("Note this means we don't allow votes for any other blockIDs. If a signature is\nincluded in a commit, it is either for nil or the correct blockID. According to\nthe Tendermint protocol and assumptions, there is no way for a correct validator to\nprecommit for a conflicting blockID in the same round an actual commit was\ncreated. This was the consensus from\n"),n("a",{attrs:{href:"https://github.com/tendermint/tendermint/issues/3485",target:"_blank",rel:"noopener noreferrer"}},[e._v("#3485"),n("OutboundLink")],1)]),e._v(" "),n("p",[e._v("We may want to consider supporting other blockIDs later, as a way to capture\nevidence that might be helpful. We should clarify if/when/how doing so would\nactually help first. To implement it, we could change the "),n("code",[e._v("Commit.BlockID")]),e._v("\nfield to a slice, where the first entry is the correct block ID and the other\nentries are other BlockIDs that validators precommited before. The BlockIDFlag\nenum can be extended to represent these additional block IDs on a per block\nbasis.")]),e._v(" "),n("h2",{attrs:{id:"status"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#status"}},[e._v("#")]),e._v(" Status")]),e._v(" "),n("p",[e._v("Accepted")]),e._v(" "),n("h2",{attrs:{id:"consequences"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#consequences"}},[e._v("#")]),e._v(" Consequences")]),e._v(" "),n("h3",{attrs:{id:"positive"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#positive"}},[e._v("#")]),e._v(" Positive")]),e._v(" "),n("p",[e._v("Removing the Type/Height/Round/Index and the BlockID saves roughly 80 bytes per precommit.\nIt varies because some integers are varint. The BlockID contains two 32-byte hashes an integer,\nand the Height is 8-bytes.")]),e._v(" "),n("p",[e._v("For a chain with 100 validators, that's up to 8kB in savings per block!")]),e._v(" "),n("h3",{attrs:{id:"negative"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#negative"}},[e._v("#")]),e._v(" Negative")]),e._v(" "),n("ul",[n("li",[e._v("Large breaking change to the block and commit structure")]),e._v(" "),n("li",[e._v("Requires differentiating in code between the Vote and CommitSig objects, which may add some complexity (votes need to be reconstructed to be verified and gossiped)")])]),e._v(" "),n("h3",{attrs:{id:"neutral"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#neutral"}},[e._v("#")]),e._v(" Neutral")]),e._v(" "),n("ul",[n("li",[e._v("Commit.Precommits no longer contains nil values")])])],1)}),[],!1,null,null,null);t.default=a.exports}}]);