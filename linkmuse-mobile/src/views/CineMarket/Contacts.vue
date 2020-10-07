<template lang="html">
  <div>
    <div class="cm-m-wrapper-content fh">
      <div class="cm-wrap-content">
        <div class="cm-m-maps mb_3" :ref="'yamap'">
          <div id="map-container" style="width: 100%; height: 400px"></div>
        </div>
        <a class="cm-m-map-link" href="https://yandex.ru/maps/2/saint-petersburg/?ll=30.300545%2C59.928469&mode=usermaps&source=constructorLink&um=constructor%3Ab6722a6594127247fdb15b532f140bbd33e387d90ed1a12049f806a015071f15&z=18" target="_blank">Открыть карту</a>
        <div class="cm-m-text-h3 mb_3">
          Санкт-Петербург, переулок Пирогова,
          дом 18, особняк «Пальма», 2 этаж, офис 203
        </div>
        <div class="cm-m-text-h4 mb_3">
          АНО культуры и просвещения «Потенциал»
          ОГРН 1157800002348 ИНН 7813221915
        </div>
        <div class="cm-m-text-h4 mb_6">
          <a class="cm-m-text-h4" href="mailto:hello@potential-platform.com">hello@potential-platform.com</a>
          <br>
          <a class="cm-m-text-h4" href="tel:89959973824">8 995 997-38-24</a>
        </div>

        <div class="cm-m-text-h2 mb_4">
          Социальные сети
        </div>

        <div class="cm-m-social-wrap">
          <a target="_blank" href="https://instagram.com/potentialfest/" class="cm-m-social-block">
            <img src="/dist/img/icons/svg/cm-insta.svg" alt="">
          </a>

          <a target="_blank" href="https://www.facebook.com/PotentialPlatform/" class="cm-m-social-block">
            <img src="/dist/img/icons/svg/cm-fb.svg" alt="">
          </a>

          <a target="_blank" href="https://vk.com/potentialfest" class="cm-m-social-block">
            <img src="/dist/img/icons/svg/cm-vk.svg" alt="">
          </a>
        </div>
        <div class="mb_6"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    metaInfo: {
      title: 'Контакты'
    },
    mounted () {
      const mapScript = document.createElement('script')
      mapScript.type='text/javascript'
      mapScript.charset='utf-8'
      mapScript.src='https://api-maps.yandex.ru/2.1/?apikey=43ec914b-bc22-41a1-8ab2-fecd5b68e875&lang=ru_RU'
      mapScript.onload = () => {
        window.ymaps.ready(() => {
          this._createMap()
        })
      }
      this.$refs['yamap'].append(mapScript)
    },
    methods: {
      _createMap () {
        var mapContainer = document.getElementById('map-container')
        var mainLocationCoords = [59.928462, 30.300811]
        var map = new ymaps.Map(mapContainer, {
          center: mainLocationCoords,
          zoom: 18,
          controls: ['typeSelector', 'fullscreenControl']
        });

        map.controls.add(new ymaps.control.ZoomControl({
          options: {
            position: { right: 10, top: 50 }
          }
        }));

        var mainPlacemark = new ymaps.Placemark(mainLocationCoords, {
          hintContent: 'Санкт-Петербург, переулок Пирогова, дом 18, особняк «Пальма», 2 этаж, офис 203'
        }, {
          preset: 'islands#glyphIcon',
          iconGlyph: 'star',
          iconGlyphColor: '#9BBA3B',
          iconColor: '#9BBA3B'
          // iconLayout: 'default#imageWithContent',
          // iconImageHref: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAALt0lEQVR42uVba2xcxRX+zsy9+/CuvbbjKHYcGwQhDyCJCSBUEh7BlLZqoSlIrWirtpSg8ggEhJCaqqVRW7XQFpG0pYUWhBq1QpRCeZeXEyiiLSoJjxAcAiHEaydx4te+d++dmdMfuw4mhL332nGMyJHun90zM+f77rkzZ86cIUyiMLN0HGe+lPIUIlpIRCcwcxsz1wOIEZGo6BkAOSIaIaIkM7/DzG9orV8NhULdRKQny0aaBNA2gHOMMRcB6AQwXwgxrnGMMQygG0CXEOJRAC8QkTtZZEwUeCszr3Zd9y2eJNFab2Xm1czcOtV4xwJv0VrfqrUenCzghyBiUGt9KzO3TBnwNWvWCGZepbXuP1LAD0FEPzOvWrNmjTii4B3H6VBKvThVwA8WpdSLjuN0HBHwzHyFUio31aAPQUKOma+YVPBa63VTDdRLtNbrgmDytTwxc4iZ7yOiiw8HkcooFHURjnbAAMIyhIiMwBLWYXlRzPwQEV1KRM6ECaiAf5iIvjBeg3oySbw5sBXdw28jmUlif2EQBTcPx5SX9JCwUWPXoCnahLbaWZjfMA8Lmk5CW+2siZDwTyJa7kWCJwHGmIeI6CtBDUiVUuhKbkRXz/PYNvw2UqU0AMASEpawIEiAKsMzGIYNlFFQRgEgJMIJzGucg862ZehsX4ZEqG48JPxDCFHVa6sSoLVeJ4S4LsigaSeD+7f/HY+99wT6sn2whY2IFYEkGch4zRpFVYRrXMyKt+LC476Er825BLWh2kD9GGN+I6VcFZgApdTlUsq7gwz21K5n8cctd+P91C7E7BhCMhTI2I8TRzvIuTkcmzgWVy5YgQuOOT8YmVqvsCzrHt8ElEqlkyzLekUIEfEzQM7N4deb1uLR955AxAojKqNg8GEB/4GhhIIqoKRLuOj4L+LGxTcgZtf4JaCotT4tHA5v9SSAmYXW+t9SyjP8dN6b7cPql27G1oGtqI/UH/iuJ0sYjOHiCBY0nYRfLPkpWuMz/ZLwspTyTCIyY3//SAhpjFnpF/yO1E5cs2EVtg29jcZI46SDB8qeMC3SiO6hbbhm4/V4P73LVzsp5RnGmJUf7W8su8zTjTFvCyEavDrsy+7G1Ruuw958P2rt2sPu8n6IyLgZtNQ0447z1vnyBGPMsBBiLhHtH/1NHKRwkx/wOZXH91/6EXbn9k4JeKD8KdTatejL7cbql25G3s17thFCNBhjbvrQbwc6ZJ7BzFf6Gfy2TWvx5sBWJEJ1UwJ+LAmJUAJbBt7EbZv9RcDMfCUzz/gIAcaYFVJKz0X2uZ4NeGTHY2iI1E8p+LEkNETq8ciOx9CVfN5Tv4Lx8g8RwMw2M3/Hq3HWzeL3r9+FiIwckQnPrxAIYRnGHa/fiayb89TXWl/G5dRdmQCl1FlSytleDR/Y/hB2pnchakUnajHIIoiQgAgJkEUTzk5GrSh2pt7HA+886KkrpZytlDrrAAFe8TIAZJwMHt7xKOJ2bNyuT5Ig4xbIFlApF8XeAoq9Bai0grBF+T85PiYYjLgdw8PvPoqMk/HUH8VsMbM0xnR6NehKbkQy24eGcP24DJQxCZVSGN44gMzmETj9RZhiOSYREYlQcxi1p9QjsaQRVp0FnQueCQ/JEHqzfehKPo/lx1/opd7JzNICMKfyVJXnejYiJOzgyAmQMQvp/w1j3329KPYVIWwC2QJUmYJ1ViHf7SD7RhrDXfsw49JZqD2tATqnENTZbGHjuZ4NfgiYA2COAHCqEKJqUnF3dje6h7YhYvnaGnxIZMzC0DP7kFy7A87+Eqw6CyIqy9+9KD9kEURUwqqz4OxzkFy7A0PP7oOMBU+QRKwIuoe2YXd2T1W9CuZThTGmw6vTNwbeRKqUDryllTGJzKYR7FnfU57wIt7tRUSAbIE9f+5BZtMIZE3AMUkiVUrjjYEtnrrGmA5BRCd4Kb41tA1BfZEkQaUV+u/rBVVmfd9tLQIR0H9fL1RGjWNi5IrNHuMQnSCY2TPv1JNJBs7XiahE+j9DKCYLvt78R9pHJErJAtL/HYKIBmtvCQs9maQ3TcyzBID6akraaAwUBoIRQAC7BplXUxD2BBZ4m5DZnAK7JlCcYAkLA4UBaOO5ktQLALFqGgVdQN7NQ5D/wxeSBJVScPYWQfb4D22ELVDaW4RKuYE+A0ECeTePgi5U1WPmmABQ1b+UcaE54JpMBJ1TMAV9iIxDEAYALhrovAYomCdp1lDG8yBZ+vDrIxvzExGUUigUClCuQqQmMoEtl7ftFoCqr9cSFiTJYEYwQ8YkRFTCpJVvLyAipNNpxONxLFmyFIl4HfpSu5GzSiAlEILtKwxnlJdDH/OWtgBU3T5FZRQxO4b+wn6vzj4wQDOshI1QSwTOYBrS8p7FiQgjIyNYuvQs3HLLLViwYCEAwDUuNiZfwG2b1yGn8gj7yDQbNojZMURl1GvMnAAwUk1JComm6DRoo3wTAAbIFqhdXA+4/nwnl8vh5JNPxv33/+0AeKAc2l5wzPn42Zk/BlXAeYk2Ck3RaZDCk/gRQUS9Xlrtde2VExv/Ygoaic80InJMFKboPYmWSiWsWnU94vH4If8/fcZpWDrzTOSVd+pLGYX2unZPPSLqFcz8jpfi/MZ5gWdh1uV5YMbX2wAQuIonaK1RV1eHRYs6qtsxbR6U99oOEOHExnneNjK/I4QQr3kpLmpagPpwfeDlUOc14h0JtHz3GLDm8rJ4SHsJzAzjAc6X+7NGfTiBhU0LPHWFEK8JAJuMMVV7bok148TGuSiqYiACgPJWt2FZE9pvnI1waxQ6o2DyGqwYbMoPacJI/zBefOZfVft6dd9rnlvyoirixMb5aIk1VyezjHmTALC98lSV89s74XoHFh9LQnxhHY794VzMXHEs4osSsOptCFtA2AJWo40ZS2fi/vRD6C/sO2QfT+58Gi/vfQVRu/rM7hgX57ef58es7QC2EwBorX8nhLimmnbWzeGbT12GwcLguA89SRJERIK1gUormErWR8Qk7ISNnJtHq9WCaxZdidObT0VYhjFQGMSTO5/CvW+tB4Gqru2OdjAtOg1/+fy9iNtVI3wYY+6QUq4kAHBd9zzLsrq8AKzv/itu3/xbTIs0TiwlTgBVkiFlayqfAhMKugDDBq3xVtRYUQwUBrG/MICYXQOLrI8dl0AYLA7hhsXX4lvzv+FpglKq07btDQSU0+LGmLeEEFUzwzk3j28/fTn25PaOKzvkVxgMV7swYFj+IjoUVBEzY81Y/7l7UONxaqy1fldKeSIRuQIAiMgVQtzrNUjMrsHKjqtQ0iUwT96hCIEQkiFEZNgXeGaGo0tY2XGVJ3gAkFLeO1pyOzZKv0dr7ZlPPnfW2bh49nIMl0Y+EYcjBMJwaRgXz16Oc2ed7alfwXigWOIAAUTUT0R3+hn0hsXXYtH0hUg5qSklgUBIOSl0TF+EGxZf668N0Z1E1P9BH2MkyPH4ntxeXL3hOvRl96AuNDXH42kng9b4TPyhcx2aa5o923gej1f+WOPHgJZYM24/51eYGW854p4w+uZb4zNx+zm/9AW+ImvGgi/3dZAELZHZnduDH7x0M17fvwUN4XpQwD1DUGFmDJdG0DF9IX6+5CeeEd+ofFyJzGEpksqrAm7btBaP7HgcYRlC1JqMIikgr4pwjIPlx1+IGxdfj6jPpThQkdSojKdM7pldXbhry5/wXup9xCehTO64xHH43sIV+Ky/UHcsAcHK5MY0DFwomXWzeGD7g3hkx+NIZnsPS6FkW+0sfPm4C/HVOZcg5hHiHizjLpQc08G4SmXTThpdPc/jueQGbBsaLZVlWMLyLJUlIiRCCcxvnIvz2pehs20Z6gJWiAKHoVS20smEi6WTmV5sGdiK7uFtVYulp0eb0FbbhvmNc3HytE9IsfQYEj6V5fKB5NN4YWI87B69V2ZG5ai+NDUqR/W1ubHCR+vFyUMQ0crMqyvXWycL+GG/OnvUX56e1K0bV7k+T0Q1qNQm8BRen/8/vsDOP6DMOoMAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTktMTAtMTFUMTM6NDk6MDgrMDA6MDDHXecMAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE5LTEwLTExVDEzOjQ5OjA4KzAwOjAwtgBfsAAAAABJRU5ErkJggg==',
          // iconImageSize: [64, 64],
          // iconImageOffset: [-32, -32],
        });

        map.geoObjects
          .add(mainPlacemark)
      }
    }
  }
</script>

<style lang="css" scoped>
</style>
