import json

with open("video_games.json", "r") as file:
    video_games = json.load(file)

# print(
#     video_games[2]["Metadata"]["Genres"].split(
#         "/",
#     )
# )

game_genres = set()

for game in video_games:
    for genre in game["Metadata"]["Genres"].split(","):
        game_genres.add(genre)

console = []
for game in video_games:
    if game["Release"]["Console"] == "Nintendo DS":
        console.append(game["Release"]["Console"])


quantidade = {console: 0 for console in game_genres}

for genre in quantidade:
    for gm in video_games:
        if genre == gm["Release"]["Console"]:
            quantidade[genre] = quantidade[genre] + 1

# print(quantidade)


# print(f"Gêneros({len(game_genres)}): {game_genres}")
# print(f"Console({len(console)}): {console}")

scores_by_genre = {genre: [] for genre in game_genres}
for game in video_games:
    for genre in game["Metadata"]["Genres"].split(","):
        scores_by_genre[genre].append(game["Metrics"]["Review Score"])

mean_review_score_by_genre = {}
for genre, scores in scores_by_genre.items():
    mean_review_score_by_genre[genre] = sum(scores) / len(scores)

print(mean_review_score_by_genre)
