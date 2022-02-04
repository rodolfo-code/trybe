import json

with open("video_games.json", "r") as file:
    video_games = json.load(file)


consoles = set()
for game in video_games:
    consoles.add(game["Release"]["Console"])

title_by_console = {console: [] for console in consoles}
for game in video_games:
    console = game["Release"]["Console"]
    title = game["Title"]
    title_by_console[console].append(title)

print(title_by_console)
