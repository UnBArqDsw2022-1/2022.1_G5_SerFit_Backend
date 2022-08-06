#!/bin/bash

sudo docker exec -i serfit_api bash -c "export MIGRATED=1 sequelize db:create && \
    sequelize db:migrate && \
    sequelize db:seed"