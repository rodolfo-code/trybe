import json

try:
    with open("video_games.json", "r") as file:
        video_games = json.load(file)

except json.decoder.JSONDecodeError:
    print("arquivo com formato inválido")
except json.decoder.JSONDecodeError:
    print("arquivo com formato inválido")
