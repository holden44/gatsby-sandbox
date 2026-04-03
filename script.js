function choosePath(path) {
  if (path === "influencer") {
    const choice = prompt(
      "Before you start:\n\nWhat makes someone influential?\n\nA: Image\nB: Access\nC: Attention\nD: Reinvention\n\nType A, B, C, or D:"
    );

    localStorage.setItem("influencer_commitment", choice || "unknown");
  }

  localStorage.setItem("path", path);
  window.location.href = "read.html";
}

const pathConfigs = {
  influencer: {
  label: "Tracking: what makes someone influential",
  defaultTitle: "Let’s test your assumption.",
  defaultText:
    "You chose a theory about influence. As you read, we’ll see whether it holds—or starts to break.",
  markers: {
    marker1: {
      kicker: "Influence test",
      title: "Everyone knows something. No one knows him.",
      text:
        "People describe Gatsby in completely different ways. No one checks. No one confirms. But everyone pays attention.",
      question:
        "What’s actually making him powerful here?",
      options: [
        { value: "stories", text: "People don’t need truth—they need something interesting to repeat" },
        { value: "mystery", text: "The mystery makes him more important" },
        { value: "performance", text: "It’s not about him—people are enjoying the story" },
        { value: "unsure", text: "I don’t know yet" }
      ],
      responses: {
        stories: {
          choice: "You think attention matters more than truth.",
          note: "If that’s right, Gatsby’s influence exists before anyone meets him. Keep that in mind."
        },
        mystery: {
          choice: "You’re leaning toward mystery as power.",
          note: "That would mean absence is doing the work. Let’s see what happens when he appears."
        },
        performance: {
          choice: "You’re focusing on the crowd, not Gatsby.",
          note: "Interesting. That would mean influence lives in the audience, not the person."
        },
        unsure: {
          choice: "You’re holding back judgment.",
          note: "Fair. You may need more evidence before committing."
        }
      }
    },

    marker3: {
      kicker: "Re-test",
      title: "Now he’s here.",
      text:
        "You finally meet Gatsby. The question is whether his presence confirms what you expected—or complicates it.",
      question:
        "Does your earlier idea about influence still hold?",
      options: [
        { value: "still", text: "Yes, what I thought still explains him" },
        { value: "changed", text: "No, something feels different now" },
        { value: "both", text: "It’s more complicated than I expected" }
      ],
      responses: {
        still: {
          choice: "You’re sticking with your theory.",
          note: "Then Gatsby fits the system you expected. Watch for anything that breaks it."
        },
        changed: {
          choice: "You’re revising your thinking.",
          note: "Good. Something about Gatsby doesn’t match the earlier pattern."
        },
        both: {
          choice: "You’re holding two ideas at once.",
          note: "That tension is probably where the real answer is."
        }
      }
    }
  }
},
  lies: {
    label: "Tracking: who’s lying",
    defaultTitle: "Watch for unstable truth.",
    defaultText:
      "This path follows rumor, self-presentation, concealment, and moments when certainty starts to wobble.",
    markers: {
      marker1: {
        kicker: "Who’s lying",
        title: "Rumor arrives before Gatsby does.",
        text:
          "The crowd is building Gatsby out of speculation before Gatsby has even properly appeared.",
        question:
          "Which feels more important here?",
        options: [
          { value: "rumor", text: "The rumors themselves" },
          { value: "performance", text: "The pleasure people take in spreading them" },
          { value: "mystery", text: "The fact that Gatsby can exist as mystery first" },
          { value: "unsure", text: "Not sure yet" }
        ],
        responses: {
          rumor: {
            choice: "You focused on the rumors.",
            note: "Good. The novel is already asking what kind of person can be assembled socially before he is known personally."
          },
          performance: {
            choice: "You focused on the performance of gossip.",
            note: "Strong instinct. The crowd is enjoying its own storytelling almost as much as Gatsby himself."
          },
          mystery: {
            choice: "You focused on mystery.",
            note: "Yes. Gatsby is beginning as an effect, not a fact."
          },
          unsure: {
            choice: "You stayed uncertain.",
            note: "Fair. The scene wants uncertainty to be productive, not merely confusing."
          }
        }
      },
      marker2: {
        kicker: "Who’s lying",
        title: "Invitation barely matters here.",
        text:
          "Nick notices that the party runs on a strange social looseness. Access exists, but the rules are blurry.",
        question:
          "What does this line suggest about Gatsby’s social world?",
        options: [
          { value: "no-rules", text: "There are no real rules here" },
          { value: "pretending", text: "Everyone is pretending the rules don’t apply" },
          { value: "confusion", text: "Gatsby’s power depends on confusion" },
          { value: "unsure", text: "Not sure yet" }
        ],
        responses: {
          "no-rules": {
            choice: "You read the scene as lawless.",
            note: "Keep watching who benefits most from that looseness."
          },
          pretending: {
            choice: "You noticed performance at the level of social rules.",
            note: "Good. Even permission here may be theatrical."
          },
          confusion: {
            choice: "You focused on blurred boundaries.",
            note: "Strong instinct. Gatsby’s world may depend on uncertainty more than hospitality."
          },
          unsure: {
            choice: "You stayed uncertain.",
            note: "Fair. The book likes social ambiguity more than clean explanation."
          }
        }
      },
      marker3: {
        kicker: "Who’s lying",
        title: "Now he is finally here.",
        text:
          "Gatsby’s physical presence does not end uncertainty. It changes its form.",
        question:
          "Once Gatsby appears, what changes most?",
        options: [
          { value: "trust", text: "He seems more trustworthy" },
          { value: "persuasive", text: "He seems more persuasive" },
          { value: "designed", text: "He seems even more constructed" },
          { value: "unsure", text: "Not sure yet" }
        ],
        responses: {
          trust: {
            choice: "You felt the scene increasing trust.",
            note: "The smile works hard to produce that effect."
          },
          persuasive: {
            choice: "You distinguished persuasion from truth.",
            note: "Good. That distinction may matter more than simple honesty here."
          },
          designed: {
            choice: "You kept your suspicion alive.",
            note: "Yes. Presence does not dissolve performance."
          },
          unsure: {
            choice: "You stayed uncertain.",
            note: "Fair. Gatsby arrives as an impression before he settles into a person."
          }
        }
      }
    }
  },

  money: {
    label: "Tracking: how money works",
    defaultTitle: "Watch what wealth actually does.",
    defaultText:
      "This path tracks display, access, insulation, and the ways money shapes atmosphere before it explains itself.",
    markers: {
      marker1: {
        kicker: "How money works",
        title: "Rumor is part of the spectacle.",
        text:
          "Before Gatsby enters, his social value is already circulating. Wealth seems to produce narrative as well as luxury.",
        question:
          "What does money seem to buy first here?",
        options: [
          { value: "attention", text: "Attention" },
          { value: "mystery", text: "Mystery" },
          { value: "status", text: "Status without explanation" },
          { value: "unsure", text: "Not sure yet" }
        ],
        responses: {
          attention: {
            choice: "You chose attention.",
            note: "Yes. Wealth here attracts not just guests, but interpretation."
          },
          mystery: {
            choice: "You chose mystery.",
            note: "Good. Money may not merely display itself. It may hide inside glamour."
          },
          status: {
            choice: "You chose status without explanation.",
            note: "Strong instinct. The party grants Gatsby power before it grants him clarity."
          },
          unsure: {
            choice: "You stayed uncertain.",
            note: "Fair. The novel reveals the mechanics of money slowly."
          }
        }
      },
      marker2: {
        kicker: "How money works",
        title: "Access looks strangely loose.",
        text:
          "Invitation exists, but it no longer seems to control entry in the ordinary way.",
        question:
          "In a world like this, what does invitation really mean?",
        options: [
          { value: "status", text: "Status" },
          { value: "permission", text: "Permission" },
          { value: "performance", text: "Performance" },
          { value: "nothing", text: "Almost nothing" }
        ],
        responses: {
          status: {
            choice: "You read invitation as a status signal.",
            note: "Watch who belongs without needing formal permission."
          },
          permission: {
            choice: "You focused on access.",
            note: "Good. Money may shape entry by atmosphere as much as by rule."
          },
          performance: {
            choice: "You treated invitation as part of the show.",
            note: "Yes. Wealth may be staging openness rather than granting it."
          },
          nothing: {
            choice: "You read invitation as nearly empty.",
            note: "Interesting. That emptiness may itself be a luxury."
          }
        }
      },
      marker3: {
        kicker: "How money works",
        title: "What kind of authority is this?",
        text:
          "When Gatsby finally appears, the scene tests whether his force feels material, personal, or fused.",
        question:
          "Does Gatsby’s authority here come more from wealth or from charm?",
        options: [
          { value: "wealth", text: "Wealth" },
          { value: "charm", text: "Charm" },
          { value: "both", text: "Both together" },
          { value: "unsure", text: "Not sure yet" }
        ],
        responses: {
          wealth: {
            choice: "You read him through money first.",
            note: "Stay with that and watch whether charm ever separates from material power."
          },
          charm: {
            choice: "You read him through presence first.",
            note: "Interesting. The novel may be asking how personal force can mask economic force."
          },
          both: {
            choice: "You fused charm and wealth.",
            note: "Good. Gatsby may be strongest precisely where those become inseparable."
          },
          unsure: {
            choice: "You stayed uncertain.",
            note: "Fair. The scene is designed to work on you quickly."
          }
        }
      }
    }
  },

  image: {
    label: "Tracking: who controls their image",
    defaultTitle: "Watch image being made.",
    defaultText:
      "This path follows staging, reputation, selective visibility, and the gap between presence and persona.",
    markers: {
      marker1: {
        kicker: "Who controls their image",
        title: "The crowd starts building Gatsby.",
        text:
          "Before Gatsby appears, other people are already producing a version of him.",
        question:
          "What matters most here?",
        options: [
          { value: "mystery", text: "Mystery makes him more interesting" },
          { value: "crowd", text: "Other people are creating his image for him" },
          { value: "staged", text: "The whole scene feels carefully staged" },
          { value: "unsure", text: "Not sure yet" }
        ],
        responses: {
          mystery: {
            choice: "You focused on mystery.",
            note: "Yes. Gatsby’s image depends on being partly withheld."
          },
          crowd: {
            choice: "You focused on crowd-made reputation.",
            note: "Strong. Gatsby may not fully control the image that surrounds him."
          },
          staged: {
            choice: "You focused on staging.",
            note: "Good. The party may be functioning as image machinery."
          },
          unsure: {
            choice: "You stayed uncertain.",
            note: "Fair. The novel likes first impressions that never quite settle."
          }
        }
      },
      marker2: {
        kicker: "Who controls their image",
        title: "Distance can be part of power.",
        text:
          "Nick’s line suggests a world in which visibility and reach are unevenly distributed.",
        question:
          "Does Gatsby seem stronger here because he is visible, or because he remains just out of reach?",
        options: [
          { value: "visible", text: "Visible" },
          { value: "distance", text: "Out of reach" },
          { value: "both", text: "Both" },
          { value: "unsure", text: "Not sure yet" }
        ],
        responses: {
          visible: {
            choice: "You chose visibility.",
            note: "Interesting. Watch whether the party itself is already standing in for Gatsby’s presence."
          },
          distance: {
            choice: "You chose distance.",
            note: "Strong instinct. Image often sharpens when the person remains slightly unavailable."
          },
          both: {
            choice: "You chose both.",
            note: "Yes. Visibility and mystery may be cooperating here."
          },
          unsure: {
            choice: "You stayed uncertain.",
            note: "Fair. Gatsby’s image is still being assembled."
          }
        }
      },
      marker3: {
        kicker: "Who controls their image",
        title: "The smile does work very quickly.",
        text:
          "Gatsby’s smile is not just description. It is a mechanism of impression.",
        question:
          "What is the smile doing most strongly?",
        options: [
          { value: "reassuring", text: "Reassuring" },
          { value: "performing", text: "Performing" },
          { value: "disarming", text: "Disarming" },
          { value: "unsure", text: "Not sure yet" }
        ],
        responses: {
          reassuring: {
            choice: "You felt the smile doing emotional work.",
            note: "Yes. The novel makes that reassurance feel almost architectural."
          },
          performing: {
            choice: "You stayed alert to self-presentation.",
            note: "Good. The smile may be part of a larger design."
          },
          disarming: {
            choice: "You treated the smile as strategic softening.",
            note: "Strong instinct. Gatsby may lower suspicion by intensifying charm."
          },
          unsure: {
            choice: "You stayed uncertain.",
            note: "Fair. The uncertainty itself is part of the effect."
          }
        }
      }
    }
  }
};

let activePath = null;
let activeMarker = null;

function getRecordStorageKey(path) {
  return `record_${path}`;
}

function getSavedRecord(path) {
  const raw = localStorage.getItem(getRecordStorageKey(path));
  return raw ? JSON.parse(raw) : [];
}

function saveRecord(path, record) {
  localStorage.setItem(getRecordStorageKey(path), JSON.stringify(record));
}

function setActiveHighlight(markerId) {
  document.querySelectorAll(".tracked").forEach((el) => {
    el.classList.remove("highlight-active");
    el.classList.add("highlight-passive");
  });

  const active = document.getElementById(markerId);
  if (active) {
    active.classList.remove("highlight-passive");
    active.classList.add("highlight-active");
  }
}

function renderRecord(path) {
  const recordList = document.getElementById("recordList");
  const entries = getSavedRecord(path);

  if (!recordList) return;

  if (!entries.length) {
    recordList.innerHTML = `<p class="record-empty">Nothing recorded yet.</p>`;
    return;
  }

  recordList.innerHTML = entries
    .map(
      (entry) => `
        <div class="record-item">
          <p class="record-label">Theory checkpoint</p>
          <p class="record-choice">${entry.choice}</p>
          <p class="record-note"><em>${entry.note}</em></p>
        </div>
      `
    )
    .join("");
}

function renderDefaultPanel(path) {
  const config = pathConfigs[path];
  if (!config) return;

  document.getElementById("pathLabel").innerText = config.label;
  document.getElementById("panelKicker").innerText = config.label;
  document.getElementById("panelTitle").innerText = config.defaultTitle;
  document.getElementById("panelText").innerText = config.defaultText;
  document.getElementById("panelOptions").innerHTML = "";
  document.getElementById("panelResponse").innerText = "";
  renderRecord(path);
}

function renderMarkerPanel(path, markerId) {
  const marker = pathConfigs[path].markers[markerId];
  if (!marker) return;

  activeMarker = markerId;

  document.getElementById("panelKicker").innerText = marker.kicker;
  document.getElementById("panelTitle").innerText = marker.title;
  document.getElementById("panelText").innerText = marker.text;
  document.getElementById("panelResponse").innerText = "";

  const optionsHtml = marker.options
    .map(
      (option) =>
        `<button class="option-button" onclick="recordAnswer('${markerId}', '${option.value}')">${option.text}</button>`
    )
    .join("");

  document.getElementById("panelOptions").innerHTML = optionsHtml;

  setActiveHighlight(markerId);
  renderRecord(path);
}

function recordAnswer(markerId, value) {
  const path = activePath;
  const marker = pathConfigs[path].markers[markerId];
  const result = marker.responses[value];

  document.getElementById("panelResponse").innerText = result.note;

  const existing = getSavedRecord(path).filter((entry) => entry.markerId !== markerId);
  existing.push({
    markerId,
    title: marker.title,
    choice: result.choice,
    note: result.note
  });

  saveRecord(path, existing);
  renderRecord(path);
}

function setupMarkers() {
  const markers = document.querySelectorAll(".tracked");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const markerId = entry.target.dataset.marker;
          renderMarkerPanel(activePath, markerId);
        }
      });
    },
    {
      root: null,
      rootMargin: "-25% 0px -55% 0px",
      threshold: 0.2
    }
  );

  markers.forEach((marker) => {
    marker.addEventListener("click", () => {
      renderMarkerPanel(activePath, marker.dataset.marker);
    });
    observer.observe(marker);
  });
}

window.onload = function () {
  activePath = localStorage.getItem("path") || "lies";
  renderDefaultPanel(activePath);
  setupMarkers();
};