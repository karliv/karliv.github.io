#!/bin/bash
set +x

curl -X POST -is   --header 'Authorization: Basic QXJ0ZW1UYXJhbm9mZjo0RUdzWHYzYXlhZHI5YTZVRmEyaw==' \
  -H 'Content-Type: application/json' \
 https://api.bitbucket.org/2.0/repositories/cntechnology/linkmuse/pipelines/ \
  -d '
  {
    "target": {
      "ref_type": "branch",
      "type": "pipeline_ref_target",
      "ref_name": "certifying-specialist"
    }
  }'

exit 0
