sudo apt-get install -y mailutils
echo "Sending e-mail" | mail -s "Pipeline" "$EMAIL_DESTINO"