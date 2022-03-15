import os
import json

start_path = '.'
data = [];

for path,dirs,files in os.walk(start_path):
    
    teamPaths = path.split('/')

    teamName = teamPaths[len(teamPaths) - 1]

    if (teamName == "."): continue

    entry = { 
        "team": teamName,
        "people": []
    }

    if (len(teamPaths) > 2): 
        # creative team
        subteamName = teamPaths[len(teamPaths) - 1] 
        teamName = "Creative"
        entry["team"] = teamName
        entry["subteam"] = subteamName

    for filename in files:
        nameStr = filename.split('.')[0]

        if (len(nameStr.split('-')) < 2): continue 

        firstName = nameStr.split('-')[0]
        lastName = nameStr.split('-')[1]

        curObj = { 
            "name": firstName.capitalize() + " " + lastName.capitalize(),
            "slug": path[2:] + "/" + filename,
        }

        entry["people"].append(curObj);
    
    data.append(entry)

jsonFile = open("../../../src/routes/people/people.json", "w")
jsonData = json.dumps(data)
jsonFile.write(jsonData)
jsonFile.close()

