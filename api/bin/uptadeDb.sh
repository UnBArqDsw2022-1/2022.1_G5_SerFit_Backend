#!/bin/bash
if [[ -z $1 ]];
then
    sudo docker exec -i serfit_api bash -c "MIGRATED=1 sequelize migration:generate --name '$(date --iso-8601)-migration'"
else
    sudo docker exec -i serfit_api bash -c "MIGRATED=1 sequelize migration:generate --name $1"
fi

sudo docker exec -i serfit_api bash -c "MIGRATED=1 sequelize db:migrate"
