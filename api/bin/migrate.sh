#!/bin/bash

sudo docker exec -i serfit_api bash -c " MIGRATED=1 sequelize db:migrate"
