""" main.py is the top level script.

Return "Hello World" at the root URL.
"""

import os
import sys

# sys.path includes 'server/lib' due to appengine_config.py
from flask import Flask
from flask import render_template
app = Flask(__name__.split('.')[0])


@app.route('/')
@app.route('/')
def index():
  return render_template('CatWalk.html')

@app.route('/catwalk')
def catwalk():
  """ Return memory card game template at application root URL."""
  return render_template('CatWalk.html')


@app.route('/madlibs')
def madlibs():
  """ Return memory card game template at application root URL."""
  return render_template('madlibs.html')

