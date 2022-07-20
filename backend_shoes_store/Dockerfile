FROM python:3.9
ENV PYTHONUNBUFFERED 1
ENV DJANGO_SETTINGS_MODULE shoes_store.settings
RUN pip install --upgrade pip
RUN pip install pipenv
WORKDIR /code
COPY Pipfile Pipfile.lock /code/

RUN pipenv install --system --deploy --dev
COPY . /code/

ENV DEBUG true
# ENV ALLOWED_HOSTS *
CMD ["sh", "start-dev.sh"]
