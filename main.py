import os
import requests
import numpy as np
import pandas as pd
import json
import urllib.request
import matplotlib.pyplot as plt
from playwright.sync_api import sync_playwright
from bs4 import BeautifulSoup
pd.set_option('display.max_columns', None) #to see all columns

years = []
stats_values = []

def http_get_request(url):
    try:
        info = ""
        url_connection = urllib.request.urlopen(url)
        input_stream = url_connection.read()
        for i in input_stream.decode("utf-8").splitlines():
          info += i
        url_connection.close()
        return info
    except Exception as e:
      print(e)
      return None
    


def points_per_game():
  for year in range(1990, 2023):
    years.append(year)
    url = "https://www.balldontlie.io/api/v1/games?seasons[]=" + str(year) + "&team_ids[]=" + str(team_id) + "&per_page=82"
    all_data = json.loads(http_get_request(url))
    total_points = 0
    for game in all_data['data']:
      if(game['home_team']['id'] == team_id):
          total_points+=game['home_team_score']
      else:
          total_points+=game['visitor_team_score']

    ppg = total_points/(len(all_data['data']))
    stats_values.append(ppg)

def rebounds_per_game():
   pass
def steals_per_game():
   pass
   
def assists_per_game():
   pass
   
def blocks_per_game():
   pass
   


team_id = str(input("Enter team ID: ")) #change this
points_per_game()

plt.ylim(50,130)
plt.xlim(1990, 2024)
plt.plot(years, stats_values,'-o', color ='blue')
plt.show()
